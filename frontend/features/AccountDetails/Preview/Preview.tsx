// COMMT: Moved from: frontend\pages\account\details\index.tsx

import { FC, useEffect, useState } from 'react';
import { IFormAccDetails } from '../../../types/global';
import styles from './Preview.module.css';

interface IPreviewProps {
  formAccDetails: IFormAccDetails
}

const Preview: FC<IPreviewProps> = (props) => {

  return (
    <div className={styles['preview']}>
        <div className={styles['image-holder']}>

        </div>
        <div className={styles['text-details']}>
          <p>{props.formAccDetails?.displayName}</p>
          <p>{props.formAccDetails?.email}</p>
        </div>
      </div>
  )
};

export default Preview;
