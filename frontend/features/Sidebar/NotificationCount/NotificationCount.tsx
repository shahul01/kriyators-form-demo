import { FC, useEffect, useState } from 'react';
import styles from './NotificationCount.module.css';

interface INotificationCountProps {
  link: string;
}

const NotificationCount: FC<INotificationCountProps> = (props) => {
  const mockedDataMessageCount = 6;
  const messageCount = ('0' + mockedDataMessageCount).slice(-2);

  return (
    <div className={styles['notification-count-container']}>
      {
        props.link === 'messages' ?
          (
            <div className={styles['message-count']}>
              {messageCount}
            </div>
          ) : (
            ''
          )
      }
    </div>
  )
};

export default NotificationCount;
