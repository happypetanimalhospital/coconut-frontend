import MainLayout from "./components/MainLayout";
import { Navigate } from 'react-router-dom';
import RegisterSeller from "./pages/RegisterSeller";
import RegisterBuyer from "./pages/RegisterBuyer";
import BuyerProfilePage from "./pages/BuyerProfilePage";
import SellersList from "./pages/SellersList";
import SellerProfilePage from "./pages/SellerProfilePage";
import SignIn from "./pages/SignIn";
import Register from "./components/layout/Register";

const routes = (profile) =>{
  console.log('rouu', profile)
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    return [
    {
      path: '/',
      element: <MainLayout/> ,
      children: [
        { path: 'register', element: <Register/> },
        { path: 'seller', element: <SellerProfilePage/>},
        { path: 'buyer/profile', element: <BuyerProfilePage/>},
        { path: 'buyer', element: <RegisterBuyer/>},
        { path: 'sellers', element: <SellersList/>},
        { path: 'login', element: !profile? <SignIn /> :<Navigate to={ref?ref:"sellers"} />},
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  };
  
  export default routes;
  