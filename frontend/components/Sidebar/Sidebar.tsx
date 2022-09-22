import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './Sidebar.module.css'

interface ISidebarProps {
}

const Sidebar: FC<ISidebarProps> = (props) => {

  return (
    <div className={styles['sidebar-container']}>
      <div className={styles['banner-btn-container']}>
        <p>KYRO</p>
        <button>☰</button>
      </div>
      <div className={styles['links-container']}>
        <div className={styles['top']}>
          {/* <Link href={styles['/']}>
          </Link> */}

        </div>
        <div className={styles['bottom']}>
          {/* <Link href={styles['/']}>
          </Link> */}

        </div>
      </div>

    </div>
  )
};

export default Sidebar;
