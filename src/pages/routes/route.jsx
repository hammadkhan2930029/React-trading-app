import { BlogsCard } from "../component/blogs/blogsCard";
import { BlogsDetails } from "../component/blogs/blogsDetail/blogsDetails";
import { BlogsMultiCards } from "../component/blogs/blogsmultiCard/blogsMultiCards";
import { ChooseUs } from "../component/chooseUs/chooseUs";
import { ContactUs } from "../component/contactUs/contactUs";
import { DrawerBar } from "../component/drawer/drawer";
import { FaqMainPage } from "../component/faqs/FaqMian/faqMainPage";
import LandingPage from "../component/landingPage";
import ResponsiveDrawer from "../home/appBar/mainComponent";
import { BuyForm } from "../home/buyForm/buyForm";
import CrudOperation from "../home/CrudSystem/crudOperation";
import { Monthly } from "../home/extraChargesForm/monthly/monthly";
import { OneTime } from "../home/extraChargesForm/oneTime/oneTime";
import { Home } from "../home/home";
import ProfilePage from "../home/profile/profile";
import { SellForm } from "../home/sellForm/sellForm";


export const routes = [
  { path: '/', element: <Home /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/buyForm', element: <BuyForm /> },
  { path: '/sellForm', element: <SellForm /> },
  { path: '/crudOperation', element: <CrudOperation /> },
  { path: '/landingPage', element: <LandingPage /> },
  { path: '/responsiveDrawer', element: <ResponsiveDrawer /> },
  { path: '/blogsMultiCards', element: <BlogsMultiCards /> },
  { path: '/blogsDetails', element: <BlogsDetails /> },
  { path: '/faqMainPage', element: <FaqMainPage /> },
  { path: '/drawerBar', element: <DrawerBar /> },
  { path: '/blogsCard', element: <BlogsCard /> },
  { path: '/chooseUs', element: <ChooseUs /> },
  { path: '/contactUs', element: <ContactUs /> },
  { path: '/onetime', element: <OneTime /> },
  { path: '/monthly', element: <Monthly /> },






];
