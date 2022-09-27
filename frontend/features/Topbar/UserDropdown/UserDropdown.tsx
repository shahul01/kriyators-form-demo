// COMMT: Moved from frontend\components\Topbar\Topbar.tsx;

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { IImage, IAccDetails } from '../../../types/global';
import styles from './UserDropdown.module.css';

interface IUserDropdownProps {
  fetchedUserData: IAccDetails[];
}

const UserDropdown: FC<IUserDropdownProps> = (props) => {

  const initialProfileImageData = {
    "id": 0,
    "isThumbnail": false,
    "mime": "image / jpeg",
    "data": ""
  };
  const userData = props?.fetchedUserData?.[0];
  const imagesArr:IImage[] = userData?.images || [];
  const profileImage:IImage|string = imagesArr?.find((currImg:IImage) => currImg?.isThumbnail) || initialProfileImageData;

  function handleUserDropdownClicked() {
    console.log('handleUserDropdownClicked() triggered');
  };

  return (
    <div
      className={styles['user-dropdown']}
      onClick={handleUserDropdownClicked}
      >
        <div className={styles['image-container']}>
          {profileImage?.data ? (
            <Image
              src={profileImage?.data}
              alt='User portrait'
              layout='fill'
              objectFit='cover'

            />
          ) : (
            ''
          )}
        </div>


        <div className={styles['text-arrow-container']}>

          <div className={styles['user-details-text']}>
            <h3 className={styles['firstName']}>
              {userData?.displayName?.split(' ')[0] || 'User'}
            </h3>
            <p className={styles['jobTitle']}>
              {userData?.jobTitle || 'Job title'}
            </p>
          </div>

          <div className={styles['arrow-container']}>
            <ArrowDropDownOutlinedIcon className='topbar-arrow-icon' />
          </div>

        </div>


      </div>
  )
};

export default UserDropdown;
