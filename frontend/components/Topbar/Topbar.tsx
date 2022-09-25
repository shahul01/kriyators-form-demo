import { FC, useEffect, useState } from 'react';
import { IAccDetails } from '../../types/global';
import styles from './Topbar.module.css';

interface ITopbarProps {
  fetchedUserData: IAccDetails[];
}

const Topbar: FC<ITopbarProps> = (props) => {
  const today = new Intl.DateTimeFormat(
    'en-US', {dateStyle: 'long'}
  ).format(new Date());
  const userData = props?.fetchedUserData?.[0];

  function handleAddProject(userName:string) {
    console.log('userName', userName);
    // COMMT: To create project by following userName
  };

  return (
    <div className={styles['topbar-container']}>
      <div className={styles['greet-today']}>
        <p>Good morning, {userData?.firstName || 'User'}</p>
        <p>{today}</p>
      </div>
      <div className={styles['btn-dropdown-container']}>
        <button onClick={() => handleAddProject(userData?.userName)}>+ ADD PROJECT</button>
        <div className={styles['user-dropdown']}>
          <p>{userData?.firstName || 'User'}</p>
          <p>{userData?.jobTitle || 'Job title'}</p>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
