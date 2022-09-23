import { FC, useEffect, useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

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
  const [formAccDetails, setFormAccDetails] = useState(initialFormState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target?.id, e.target?.value);
    setFormAccDetails({
      ...formAccDetails,
      [e.target?.id]: e.target?.value
    });
  };

  return (
    <div className='account-details-container' >
      <div className="header">
        My Profile
      </div>
      <div className="body">
        <div className="form">
          <div className="inputs-container">
            <TextField
              id='firstName'
              label='firstName'
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
              value={formAccDetails.displayName}
              onChange={handleChange}
            />
            <TextField
              id='email'
              label='Email'
              value={formAccDetails.email}
              onChange={handleChange}
            />
            <TextField
              id='phoneNo1'
              label='Phone No (Work)'
              value={formAccDetails.phoneNo1}
              onChange={handleChange}
            />
            <TextField
              id='phoneNo2'
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
          <div className="buttons-container">

          </div>
        </div>
        <div className="result">

        </div>
      </div>
    </div>
  )
};

export default AccountDetails;
