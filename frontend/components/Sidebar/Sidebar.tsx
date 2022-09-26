import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Links from '../../features/Sidebar/Links/Links';
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
            <div>
              Logout
            </div>
          ) : (
            <div>
              Login
            </div>
          )}

        </div>
      </div>

    </div>
  )
};

export default Sidebar;
