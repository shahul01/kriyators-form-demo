import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { IImage, IAccDetails } from '../../types/global';
import styles from './Topbar.module.css';

interface ITopbarProps {
  fetchedUserData: IAccDetails[];
}

const Topbar: FC<ITopbarProps> = (props) => {

  const today = new Intl.DateTimeFormat(
    'en-US', {dateStyle: 'long'}
  ).format(new Date());

  const userData = props?.fetchedUserData?.[0];

  const imagesArr:IImage[] = userData?.images || [];
  const profileImage:IImage|string = imagesArr?.find((currImg:IImage) => currImg?.isThumbnail) || '';

  function handleAddProject(userName:string) {
    console.log('userName', userName);
    // COMMT: To create project by following userName
  };

  return (
    <div className={styles['topbar-container']}>
      <div className={styles['greet-today']}>
        <h2 className={styles['name']}>Good morning, {userData?.firstName || 'User'}</h2>
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
        <div className={styles['user-dropdown']}>
          <div className={styles['image-container']}>
            <Image
              src={profileImage?.data}
              alt='User portrait'
              layout='fill'
              objectFit='cover'

            />
          </div>
          <div className={styles['user-details-text']}>
            <h3 className={styles['firstName']}>
              {userData?.firstName || 'User'}
            </h3>
            <p className={styles['jobTitle']}>
              {userData?.jobTitle || 'Job title'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Topbar;
