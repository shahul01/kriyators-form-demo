import { FC, useEffect, useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
        <div className={styles['form']}>
          <div className={styles['inputs-container']}>
            <TextField
              id='firstName'
              label='First Name'
              value={formAccDetails.firstName}
              onChange={handleChange}
            />
            <TextField
              id='lastName'
              label='Last Name'
              value={formAccDetails.lastName}
              onChange={handleChange}
            />
            <TextField
              id='displayName'
              label='Display Name'
              required={true}
              value={formAccDetails.displayName}
              onChange={handleChange}
            />
            <TextField
              id='email'
              label='Email'
              required={true}
              value={formAccDetails.email}
              onChange={handleChange}
            />
            <TextField
              id='phoneNo1'
              type='number'
              label='Phone No (Work)'
              value={formAccDetails.phoneNo1}
              onChange={handleChange}
            />
            <TextField
              id='phoneNo2'
              type='number'
              label='Phone No (Work)'
              value={formAccDetails.phoneNo2}
              onChange={handleChange}
            />
            <TextField
              id='location'
              label='Location'
              value={formAccDetails.location}
              onChange={handleChange}
            />


          </div>
          <div className={styles['buttons-container']}>
            <Button
              variant='contained'
              onClick={handleSubmit}
              >
              Save Changes
            </Button>

            <Button
              variant='outlined'
              onClick={handleReset}
              >
              Reset
            </Button>

          </div>
        </div>
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
