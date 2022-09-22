import { FC, useEffect, useState } from 'react';
import styles from './Topbar.module.css';

interface ITopbarProps {
}

const Topbar: FC<ITopbarProps> = (props) => {

  return (
    <div className={styles['topbar-container']}>
      <div className={styles['greet-today']}>
        <p>Good morning, Adam</p>
        <p>April 28, 2022</p>
      </div>
      <div className={styles['btn-dropdown-container']}>
        <button>+ ADD PROJECT</button>
        <div className={styles['user-dropdown']}>
          <p>Adam</p>
          <p>Project Manager</p>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
