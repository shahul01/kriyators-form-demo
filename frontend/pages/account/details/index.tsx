import { FC, useEffect, useRef, useState, ChangeEvent } from 'react';
import toast from 'react-simple-toasts';
import { useGetAccDetailsQuery, useUpdateAccDetailsMutation } from '../../../features/services/accDetails';
import Form from '../../../features/AccountDetails/Form/Form';
import styles from './index.module.css';
import Preview from '../../../features/AccountDetails/Preview/Preview';

interface IAccountDetailsProps {
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {

  const initialFormState = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phoneNo1: '',
    phoneNo2: '',
    location: ''
  };
  const { data: fetchedFormData, error:ErrorGetAccDetails, isLoading } = useGetAccDetailsQuery();
  const [ updateAccDetails, { error:ErrorUpdateAccDetails } ] = useUpdateAccDetailsMutation()
  const [ formAccDetails, setFormAccDetails ] = useState(initialFormState);
  const [ changedFormData, setChangedFormData ] = useState({});
  const [ formChanged, setFormChanged ] = useState(false);

  useEffect(() => {
    if (fetchedFormData?.length) {
      setFormAccDetails(fetchedFormData?.[0]);
    };
  }, [fetchedFormData]);

  useEffect(() => {
    if (ErrorGetAccDetails?.error) {
      console.error('error', ErrorGetAccDetails);
      toast(`Error: Can't get data. ${ErrorGetAccDetails?.error}`);
    };
  }, [ErrorGetAccDetails]);

  useEffect(() => {
    getChangedFormData();
  }, [formAccDetails]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!formChanged) setFormChanged(true);
    setFormAccDetails({
      ...formAccDetails,
      [e.target?.id]: e.target?.value
    });
  };

  function getChangedFormData() {
    if (!fetchedFormData || !formChanged) return;
    for (let key in fetchedFormData?.[0]) {
      const oldFormKey = fetchedFormData?.[0][key];
      const newFormKey = formAccDetails[key];
      if (oldFormKey !== newFormKey) {
        setChangedFormData({
          ...changedFormData,
          [key]: formAccDetails[key]
        })
      };
    };

  };

  function handleUploadPicture() {
    console.log('handleUploadPicture() triggered');
  };

  function handleSubmit() {
    // console.log('changedFormData', changedFormData);
    updateAccDetails(changedFormData);
    if (ErrorUpdateAccDetails?.error) {
      console.error('ErrorUpdateAccDetails :>> ', ErrorUpdateAccDetails);
      toast(`Error: Can't submit data. ${ErrorUpdateAccDetails.error}`);
    };

  };

  function handleReset() {
    if (fetchedFormData?.length) {
      setFormAccDetails(fetchedFormData?.[0]);
    } else {
      setFormAccDetails(initialFormState);
    };
  };

  return (
    <div className={styles['account-details-container' ]}>
      <h1 className={styles['header']}>
        My Profile
      </h1>
      <div className={styles['body']}>
        <Form
          formAccDetails={formAccDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        <Preview
          formAccDetails={formAccDetails}
          handleUploadPicture={handleUploadPicture}
        />
      </div>
    </div>
  )
};

export default AccountDetails;
