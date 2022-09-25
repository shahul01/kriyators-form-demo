import { FC, useEffect, useState } from 'react';
import { IFormAccDetails } from '../../types/global';
import styles from './Topbar.module.css';

interface ITopbarProps {
  fetchedUserData: IFormAccDetails[];
}

const Topbar: FC<ITopbarProps> = (props) => {
  const firstName = props?.fetchedUserData?.[0]?.firstName;

  return (
    <div className={styles['topbar-container']}>
      <div className={styles['greet-today']}>
        <p>Good morning, {firstName || 'User'}</p>
        <p>April 28, 2022</p>
      </div>
      <div className={styles['btn-dropdown-container']}>
        <button>+ ADD PROJECT</button>
        <div className={styles['user-dropdown']}>
          <p>{firstName}</p>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
