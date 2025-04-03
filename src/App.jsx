import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home'; 
import ProfilePage from './pages/home/profile/profile';
import { BuyForm } from './pages/home/buyForm/buyForm';
import { SellForm } from './pages/home/sellForm/sellForm';
import CrudOperation from './pages/home/CrudSystem/crudOperation';
import LandingPage from './pages/component/landingPage';
import ResponsiveDrawer from './pages/home/appBar/mainComponent';
import { BlogsMultiCards } from './pages/component/blogs/blogsmultiCard/blogsMultiCards';
import { Navbar } from './pages/component/navbar/navbar';
import { BlogsDetails } from './pages/component/blogs/blogsDetail/blogsDetails';
import { FaqMainPage } from './pages/component/faqs/FaqMian/faqMainPage';
import { DrawerBar } from './pages/component/drawer/drawer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<ProfilePage/>} />  
        <Route path="/buyForm" element={<BuyForm/>} />  
        <Route path="/sellForm" element={<SellForm/>} />  
        <Route path="/crudOperation" element={<CrudOperation/>} /> 
        <Route path="/landingPage" element={<LandingPage/>} /> 
        <Route path="/responsiveDrawer" element={<ResponsiveDrawer/>} /> 
        <Route path="/blogsMultiCards" element={<BlogsMultiCards/>} /> 
        <Route path="/blogsDetails" element={<BlogsDetails/>} /> 
        <Route path="/faqMainPage" element={<FaqMainPage/>} /> 
        <Route path="/drawerBar" element={<DrawerBar/>} /> 





      </Routes>
    </Router>
  );
}

export default App;
