import { FC, useEffect, useRef, useState, ChangeEvent } from 'react';
import { useGetAccDetailsQuery } from '../../../features/services/accDetails';
import Form from '../../../features/AccountDetails/Form/Form';
import styles from './index.module.css';
import { IFormAccDetails } from '../../../types/global';

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
  const { data: fetchedFormData, error, isLoading } = useGetAccDetailsQuery();
  const [ formAccDetails, setFormAccDetails ] = useState(initialFormState);
  const [ changedFormData, setChangedFormData ] = useState({});
  const [ formChanged, setFormChanged ] = useState(false);

  useEffect(() => {
    if (fetchedFormData?.length) {
      setFormAccDetails(fetchedFormData?.[0]);
    };
  }, [fetchedFormData]);

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

    console.log('changedFormData', changedFormData);

  };

  function handleSubmit() {
    console.log('formAccDetails :>> ', formAccDetails);

  };

  function handleReset() {
    setFormAccDetails(initialFormState);
  };

  return (
    <div className={styles['account-details-container' ]}>
      <div className={styles['header']}>
        My Profile
      </div>
      <div className={styles['body']}>
        <Form
          formAccDetails={formAccDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        <div className={styles['result']}>
          <div className={styles['image-holder']}>

          </div>
          <div className={styles['text-details']}>
            <p>{formAccDetails.displayName}</p>
            <p>{formAccDetails.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AccountDetails;
