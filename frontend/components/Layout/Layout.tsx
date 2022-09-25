import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { useGetAccDetailsQuery } from '../../features/services/accDetails';
import styles from './Layout.module.css';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {
  const { data:fetchedUserData, error, isLoading } = useGetAccDetailsQuery();

  return (
    <div className={styles['layout-container']}>
      <Sidebar
        fetchedUserData={fetchedUserData || []}
      />
      <div className={styles['main']}>
        <Topbar
          fetchedUserData={fetchedUserData || []}
        />
        <div className={styles['content']}>
          {props.children}
        </div>
      </div>

    </div>
  )
};

export default Layout;
