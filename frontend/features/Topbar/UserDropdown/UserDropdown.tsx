// COMMT: Moved from frontend\components\Topbar\Topbar.tsx;

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { IImage, IAccDetails } from '../../../types/global';
import styles from './UserDropdown.module.css';

interface IUserDropdownProps {
  fetchedUserData: IAccDetails[];
}

const UserDropdown: FC<IUserDropdownProps> = (props) => {

  const userData = props?.fetchedUserData?.[0];

  const imagesArr:IImage[] = userData?.images || [];
  const profileImage:IImage|string = imagesArr?.find((currImg:IImage) => currImg?.isThumbnail) || '';

  return (
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
  )
};

export default UserDropdown;
