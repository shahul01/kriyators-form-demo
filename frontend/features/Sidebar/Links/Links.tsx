import { FC, useEffect, useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationCount from '../NotificationCount/NotificationCount';
import styles from './Links.module.css';

interface ILinksProps {
}

const Links: FC<ILinksProps> = (props) => {

  const links:any[] = [
    {
      icon: <HomeRoundedIcon className='sidebar-icon' /> ,
      name: 'Home',
      notificationCount: <NotificationCount link='home' />
    },
    {
      icon: <EventNoteRoundedIcon className='sidebar-icon' /> ,
      name: 'Projects',
      notificationCount: <NotificationCount link='projects' />
    },
    {
      icon: <GridViewRoundedIcon className='sidebar-icon' /> ,
      name: 'Dashboard',
      notificationCount: <NotificationCount link='dashboard' />
    },
    {
      icon: <ForumRoundedIcon className='sidebar-icon' /> ,
      name: 'Messages',
      notificationCount: <NotificationCount link='messages' />
    },
    {
      icon: <ArticleRoundedIcon className='sidebar-icon' /> ,
      name: 'Documents',
      notificationCount: <NotificationCount link='documents' />
    },
    {
      icon: <ApartmentIcon className='sidebar-icon' /> ,
      name: 'Organizations',
      notificationCount: <NotificationCount link='organizations' />
    },
    {
      icon: <SettingsRoundedIcon className='sidebar-icon' /> ,
      name: 'Settings',
      notificationCount: <NotificationCount link='settings' />
    }
  ];


  return (
    <div className={styles['links']}>
      {
        links.map((currLink, idx) => (
          <div key={idx} className='sidebar-link'>
            <div className={styles['icon']}>
              {currLink.icon}
              </div>
            <h2 className={styles['name']}>
              {currLink.name}
            </h2>
            <div className={styles['notification-count']}>
              {currLink.notificationCount}
              </div>
          </div>
        ))
      }
    </div>
  )
};

export default Links;
