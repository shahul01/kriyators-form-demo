import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import UserDropdown from '../../features/Topbar/UserDropdown/UserDropdown';
import { IImage, IAccDetails } from '../../types/global';
import styles from './Topbar.module.css';

interface ITopbarProps {
  fetchedUserData: IAccDetails[];
}

const Topbar: FC<ITopbarProps> = (props) => {


  const userData = props?.fetchedUserData?.[0];
  const today = new Intl.DateTimeFormat(
    'en-US', {dateStyle: 'long'}
  ).format(new Date());

  function handleAddProject(userName:string) {
    console.log('userName', userName);
    // COMMT: To create project by following userName
  };

  return (
    <div className={styles['topbar-container']}>

      <div className={styles['greet-today']}>
        <h2 className={styles['name']}>Good morning, {userData?.displayName?.split(' ')?.[0] || 'User'}</h2>
        <p className={styles['date']}>{today}</p>
      </div>

      <div className={styles['btn-dropdown-container']}>

        <Button
          variant='contained'
          onClick={() => handleAddProject(userData?.userName)}
          >
            <div className={styles['btn-text']}>
              <AddOutlinedIcon className='topbar-btn-icon' />
              <span>ADD PROJECT</span>
            </div>
        </Button>
        <UserDropdown
          fetchedUserData={props?.fetchedUserData}
         />

      </div>
    </div>
  )
};

export default Topbar;
