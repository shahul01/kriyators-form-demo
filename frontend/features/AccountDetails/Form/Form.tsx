// COMMT: Moved from frontend\pages\account\details\index.tsx

import { FC, useEffect, useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';
import { IAccDetails } from '../../../types/global';
import styles from './Form.module.css';

interface IFormProps {
  formAccDetails: IAccDetails
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleReset: () => void;
}

const Form: FC<IFormProps> = (props) => {

  const validEmailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  const isValidEmail = validEmailRegex.test(props.formAccDetails?.email);

  return (
    <div className={styles['form']}>
      <div className={styles['inputs-container']}>
        <TextField
          id='firstName'
          label='First Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          value={props.formAccDetails?.firstName}
          onChange={props.handleChange}
        />
        <TextField
          id='lastName'
          label='Last Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          value={props.formAccDetails?.lastName}
          onChange={props.handleChange}
        />
        <TextField
          id='displayName'
          label='Display Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <AccountBoxOutlinedIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          required={true}
          value={props.formAccDetails?.displayName}
          onChange={props.handleChange}
        />
        <TextField
          id='email'
          label='Email'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <EmailOutlinedIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          required={true}
          type='email'
          error={!isValidEmail}
          helperText={!isValidEmail ? 'Please enter a valid Email' : ''}
          value={props.formAccDetails?.email}
          onChange={props.handleChange}
        />
        <TextField
          id='phoneNo1'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <EmailOutlinedIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          label='Phone No (Work)'
          value={props.formAccDetails?.phoneNo1}
          onChange={props.handleChange}
        />
        <TextField
          id='phoneNo2'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          label='Phone No (Work)'
          value={props.formAccDetails?.phoneNo2}
          onChange={props.handleChange}
        />
        <TextField
          id='location'
          label='Location'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <LocationOnOutlinedIcon />
              </InputAdornment>
            )
          }}
          color='secondary'
          value={props.formAccDetails?.location}
          onChange={props.handleChange}
        />


      </div>
      <div className={styles['buttons-container']}>
        <Button
          variant='contained'
          onClick={props.handleSubmit}
          >
          Save Changes
        </Button>

        <Button
          variant='outlined'
          onClick={props.handleReset}
          >
          Reset
        </Button>

      </div>
    </div>
  )
};

export default Form;
