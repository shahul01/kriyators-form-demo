import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import styles from './Layout.module.css';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {

  return (
    <div className={styles['layout-container']}>
      <Sidebar />
      <div className={styles['main']}>
        <Topbar />
        <div className={styles['content']}>
          {props.children}
        </div>
      </div>

    </div>
  )
};

export default Layout;
