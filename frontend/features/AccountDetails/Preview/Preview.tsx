// COMMT: Moved from: frontend\pages\account\details\index.tsx

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { IImage, IAccDetails } from '../../../types/global';
import styles from './Preview.module.css';

interface IPreviewProps {
  formAccDetails: IAccDetails;
  handleUploadPicture: ()=>void;
}

const Preview: FC<IPreviewProps> = (props) => {
  const initialProfileImageData:IImage = {
    "id": 0,
    "isThumbnail": false,
    "mime": "image / jpeg",
    "data": ""
  };
  const imagesArr:IImage[] = props.formAccDetails?.images || [];
  const profileImage:IImage = imagesArr?.find((currImg:IImage) => !currImg?.isThumbnail) || initialProfileImageData;

  return (
    <div className={styles['preview']}>
        <div className={styles['image-button-container']}>
          <div className={styles['image-container']}>
            {(profileImage) ? (
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
            <CameraAltRoundedIcon className='camera-img-upload' />
          </div>

        </div>
        <div className={styles['text-details']}>
          <h2 className={styles['displayName']}>{props.formAccDetails?.displayName}</h2>
          <h3 className={styles['email']}>{props.formAccDetails?.email}</h3>
        </div>
      </div>
  )
};

export default Preview;
