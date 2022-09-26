// COMMT: Moved from: frontend\pages\account\details\index.tsx

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { IFormAccDetails } from '../../../types/global';
import styles from './Preview.module.css';

interface IPreviewProps {
  formAccDetails: IFormAccDetails;
  handleUploadPicture: ()=>void;
}

const Preview: FC<IPreviewProps> = (props) => {
  const imagesArr = props.formAccDetails?.images;
  const profileImage = imagesArr?.find((currImg:{}) => !currImg.isThumbnail) || '';

  return (
    <div className={styles['preview']}>
        <div className={styles['image-button-container']}>
          <div className={styles['image-container']}>
            {profileImage ? (
              <Image
                src={profileImage?.data}
                alt='Profile Image'
                layout='fill'
                objectFit='cover'
              />) : (
                <div className={styles['empty-image']}></div>
              )
            }
          </div>
          <div className={styles['button']} onClick={props.handleUploadPicture} >
            <CameraAltRoundedIcon className='camera' />
          </div>

        </div>
        <div className={styles['text-details']}>
          <p>{props.formAccDetails?.displayName}</p>
          <p>{props.formAccDetails?.email}</p>
        </div>
      </div>
  )
};

export default Preview;
