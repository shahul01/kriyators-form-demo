import { FC, useEffect, useRef, useState, ChangeEvent } from 'react';
import toast from 'react-simple-toasts';
import { useGetAccDetailsQuery, useUpdateAccDetailsMutation } from '../../../features/services/accDetails';
import Form from '../../../features/AccountDetails/Form/Form';
import { IAccDetails, IFormAccDetails } from '../../../types/global';
import styles from './index.module.css';
import Preview from '../../../features/AccountDetails/Preview/Preview';

interface IAccountDetailsProps {
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {

  const initialFormState:IAccDetails = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phoneNo1: '',
    phoneNo2: '',
    location: '',
    images: [],
    jobTitle: '',
    userName: ''
  };
  const validEmailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  const firstRender = useRef({
    ErrorGetAccDetails: true,
    isLoadingFormData: true
  });
  const changedFormData = useRef({});
  const { data: fetchedFormData, error:ErrorGetAccDetails, isLoading: isLoadingFormData, refetch: refetchFormData } = useGetAccDetailsQuery();
  const [ updateAccDetails, { error:ErrorUpdateAccDetails } ] = useUpdateAccDetailsMutation()
  const [ formAccDetails, setFormAccDetails ] = useState<IAccDetails|{[key:string]:any}|any>(initialFormState);
  // const [ changedFormData, setChangedFormData ] = useState({});
  const [ formChanged, setFormChanged ] = useState(false);
  const isValidEmail = validEmailRegex.test(formAccDetails?.email);

  useEffect(() => {
    if (fetchedFormData?.length) {
      // console.log('fetchedFormData', fetchedFormData);
      setFormAccDetails(fetchedFormData?.[0]);
    };
  }, [fetchedFormData]);

  useEffect(() => {
    // COMMT: show toast if data not loaded yet but for 4 secs max.
    if (
        // isLoadingFormData
        // &&
        firstRender.current.isLoadingFormData
      ) {
      toast(
        'Loading...', {
          time: (4*1000),
          clickClosable: true
        }
      )};
    firstRender.current.isLoadingFormData = false;


  }, [isLoadingFormData]);

  useEffect(() => {
    // COMMT: show toast if data error when fetching yet but for 7 secs max.
    if (
        (typeof(ErrorGetAccDetails) !== 'undefined')
        && 'error' in ErrorGetAccDetails
        && firstRender.current.ErrorGetAccDetails
      ) {
      console.error('error', ErrorGetAccDetails);
      toast(
        `Error: Can't get data. ${ErrorGetAccDetails?.error}`, {
          time: (7*1000),
          clickClosable: true
        }
      );
      firstRender.current.ErrorGetAccDetails = false;
    };

  }, [ErrorGetAccDetails]);

  useEffect(() => {
    getChangedFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const fetchedForm:{[key:string]:any} = fetchedFormData?.[0];
    for (let key in fetchedForm) {
      const oldFormKey:string = fetchedForm[key];
      const newFormKey:string = formAccDetails[key];
      if (oldFormKey !== newFormKey) {
        changedFormData.current = {
          ...changedFormData.current,
          [key]: formAccDetails[key]
        };
      };
    };

  };

  function handleUploadPicture() {
    console.log('handleUploadPicture() triggered');
  };

  function handleSubmit() {
    if (!isValidEmail) {
      return toast('Error: Please Enter a valid Email. Not submitted.');
    };

    console.log('changedFormData', changedFormData.current);
    updateAccDetails(changedFormData.current);

    if ((typeof(ErrorUpdateAccDetails) !== 'undefined') && 'error' in ErrorUpdateAccDetails) {
      console.error('ErrorUpdateAccDetails :>> ', ErrorUpdateAccDetails);
      toast(`Error: Can't submit data. ${ErrorUpdateAccDetails.error}`);
    };

    toast('Details updated.');
    // refetchFormData();

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
          isValidEmail={isValidEmail}
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
