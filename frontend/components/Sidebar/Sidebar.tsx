import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Links from '../../features/Sidebar/Links/Links';
import NotificationCount from '../../features/Sidebar/NotificationCount/NotificationCount';
import { IFormAccDetails } from '../../types/global';
import styles from './Sidebar.module.css';

interface ISidebarProps {
  fetchedUserData: IFormAccDetails[];
}

const Sidebar: FC<ISidebarProps> = (props) => {
  const [ isShowSidebar, setIsShowSidebar ] = useState(false);

  return (
    <div
      className={styles['sidebar-container']}
      style={{'width': ` ${isShowSidebar ? '20%' : '10%'}`}}
      >
      <div className={styles['banner-btn-container']} onClick={() => setIsShowSidebar(!isShowSidebar)}>
        <div className={styles['banner-container']}>
          <Image
            src="/images/logo.png"
            alt="KYRO Logo"
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles['button']}>
          <MenuRoundedIcon className='menu-button' />
        </div>

      </div>
      <div className={styles['links-container']}>
        <div className={styles['top']}>
          <Links

          />
        </div>
        <div className={styles['bottom']}>
          {/* <Link href={styles['/']}>
          </Link> */}
          {props.fetchedUserData?.[0] ? (
            <div className='sidebar-link'>

              <div className={styles['icon']}>
                <LogoutRoundedIcon className='sidebar-icon' />
              </div>
              <h2 className={styles['name']}>
                Logout
              </h2>
              <div className={styles['notification-count']}>
                <NotificationCount link='logout' />
              </div>

            </div>
          ) : (
            <div className='sidebar-link'>

              <div className={styles['icon']}>
                <LoginRoundedIcon className='sidebar-icon' />
              </div>
              <h2 className={styles['name']}>
                Login
              </h2>
              <div className={styles['notification-count']}>
                <NotificationCount link='login' />
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  )
};

export default Sidebar;
