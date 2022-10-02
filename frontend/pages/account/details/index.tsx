import { FC, useEffect, useRef, useState, ChangeEvent } from 'react';
import toast from 'react-simple-toasts';
import { useGetAccDetailsQuery, useUpdateAccDetailsMutation } from '../../../features/services/accDetails';
import Form from '../../../features/AccountDetails/Form/Form';
import { IAccDetails, IFormAccDetails } from '../../../types/global';
import styles from './index.module.css';
import Preview from '../../../features/AccountDetails/Preview/Preview';
import { initialFormState } from '../../../helpers/constants';
import { isValidEmailCheck } from '../../../helpers/form';

interface IAccountDetailsProps {
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {

  const firstRender = useRef({ ErrorGetAccDetails:true, isLoadingFormData:true, changedFormData:true });
  const [ formAccDetails, setFormAccDetails ] = useState<IAccDetails|{[key:string]:any}|any>(initialFormState);
  const { data: fetchedFormData, error:ErrorGetAccDetails, isLoading: isLoadingFormData, refetch:refetchFormData } = useGetAccDetailsQuery();
  const [ updateAccDetails, { error:ErrorUpdateAccDetails } ] = useUpdateAccDetailsMutation();
  const [ isFormUpdated, setIsFormUpdated ] = useState(false);
  const [ isValidEmail, setIsValidEmail ] = useState(true);

  useEffect(() => {
    if (fetchedFormData?.length) {
      setFormAccDetails(fetchedFormData?.[0]);
    };
  }, [fetchedFormData]);

  useEffect(() => {
    // COMMT: show toast if data not loaded yet but for 4 secs max.
    if (
        // isLoadingFormData &&
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
    if (firstRender.current.changedFormData) {
      getChangedFormData();
      firstRender.current.changedFormData = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formAccDetails]);

  useEffect(() => {
    if (isLoadingFormData||(typeof(ErrorGetAccDetails) !== 'undefined' && 'error' in ErrorGetAccDetails)) return;
    checkEmailValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formAccDetails.email]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!isFormUpdated) setIsFormUpdated(true);
    setFormAccDetails({
      ...formAccDetails,
      [e.target?.id]: e.target?.value
    });
  };

  function getChangedFormData() {
    // COMMT: Loops through fetchedForm and formAccDetails to gets only updated values
    if (isLoadingFormData && typeof(fetchedFormData)!=='undefined') return toast('Error: Server is not connected.', {
      time: (7*1000),
      clickClosable: true
    });
    if (isLoadingFormData && !isFormUpdated) return;
    let changedFormData:{[key:string]:any} = {};
    const fetchedForm:{[key:string]:any}|undefined = fetchedFormData?.[0];

    for (let key in fetchedForm) {
      const oldFormKey:string = fetchedForm[key];
      const newFormKey:string = formAccDetails[key];
      if (oldFormKey !== newFormKey) {
        changedFormData = {
          ...changedFormData,
          [key]: formAccDetails[key]
        };
      };
    };

    return changedFormData;

  };

  function checkEmailValidity() {
    const emailValidity = isValidEmailCheck(formAccDetails.email);
    setIsValidEmail(emailValidity);
  };

  function handleUploadPicture() {
    console.log('handleUploadPicture() triggered');
  };

  async function handleSubmit() {
    if (!isValidEmail) {
      return toast('Error: Please enter a valid Email. Not submitted.');
    };

    const changedFormData:{[key:string]:any}|void|undefined = getChangedFormData();
    if (!changedFormData || !Object.entries(changedFormData)?.length) {
      return toast('Error: Unconnected server or unchanged data. Not submitted.')
    };
    await updateAccDetails(changedFormData);

    if ((typeof(ErrorUpdateAccDetails) !== 'undefined') && 'error' in ErrorUpdateAccDetails) {
      console.error('ErrorUpdateAccDetails :>> ', ErrorUpdateAccDetails);
      toast(`Error: Can't submit data. ${ErrorUpdateAccDetails.error}`);
    };

    toast('Details updated.');
    refetchFormData();

  };

  function handleReset() {
    setFormAccDetails(fetchedFormData?.[0] || initialFormState);
  };

  return (
    <div className={styles['account-details-container' ]}>
      <h1 className={styles['header']}>
        My Profile
      </h1>
      <div className={styles['body']}>
        <Form
          formAccDetails={formAccDetails}
          isValidEmail={isValidEmail}
          handleChange={handleChange}
          checkEmailValidity={checkEmailValidity}
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
