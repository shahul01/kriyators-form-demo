// COMMT: Moved from frontend\pages\account\details\index.tsx

import { FC, useEffect, useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './Form.module.css';

interface IFormProps {
  formAccDetails: { [key:string]:string|number }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleReset: () => void;
}

const Form: FC<IFormProps> = (props) => {

  return (
    <div className={styles['form']}>
      <div className={styles['inputs-container']}>
        <TextField
          id='firstName'
          label='First Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          value={props.formAccDetails?.firstName}
          onChange={props.handleChange}
        />
        <TextField
          id='lastName'
          label='Last Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          value={props.formAccDetails?.lastName}
          onChange={props.handleChange}
        />
        <TextField
          id='displayName'
          label='Display Name'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          required={true}
          value={props.formAccDetails?.displayName}
          onChange={props.handleChange}
        />
        <TextField
          id='email'
          label='Email'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          required={true}
          value={props.formAccDetails?.email}
          onChange={props.handleChange}
        />
        <TextField
          id='phoneNo1'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          label='Phone No (Work)'
          value={props.formAccDetails?.phoneNo1}
          onChange={props.handleChange}
        />
        <TextField
          id='phoneNo2'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
          color='secondary'
          label='Phone No (Work)'
          value={props.formAccDetails?.phoneNo2}
          onChange={props.handleChange}
        />
        <TextField
          id='location'
          label='Location'
          InputLabelProps={{ style: {color: 'hsl(0, 0%, 22%)'} }}
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
