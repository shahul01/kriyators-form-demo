import { FC, useEffect, useState, ChangeEvent } from 'react';
import Form from '../../../features/AccountDetails/Form/Form';
import styles from './index.module.css';

interface IAccountDetailsProps {
}

const AccountDetails: FC<IAccountDetailsProps> = (props) => {

  const initialFormState = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    phoneNo1: 0,
    phoneNo2: 0,
    location: ''
  };
  const [ formAccDetails, setFormAccDetails ] = useState(initialFormState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target?.id, e.target?.value);
    setFormAccDetails({
      ...formAccDetails,
      [e.target?.id]: e.target?.value
    });
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
