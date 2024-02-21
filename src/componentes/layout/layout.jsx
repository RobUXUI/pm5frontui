
import { Outlet } from "react-router-dom";
import Navigation from '../../Routes/Navigation';

// import Header from '../header/Header';
// import Footer from '../footer/Footer';

const Layout = () => {
    return (
      <div>
      <Navigation />
      <Outlet />
      </div>
    )
  }
  
  export default Layout;
  
