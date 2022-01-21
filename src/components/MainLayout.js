import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';

const MainLayout = () => (
  <div>
    <Navbar/>
  <div style={{width:'60%', margin:'0 auto',backgroundColor:"white"}}>
   <Outlet />
    </div>
  </div>
);

export default MainLayout;
