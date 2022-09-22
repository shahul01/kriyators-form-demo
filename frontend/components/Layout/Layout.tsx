import { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {

  return (
    <div style={{'display': 'flex'}}>
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">{props.children}</div>
      </div>

    </div>
  )
};

export default Layout;
