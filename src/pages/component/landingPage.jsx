import { useEffect, useRef, useState } from 'react'
import { Navbar } from '../component/navbar/navbar'
import { Cards } from './cards/cards';
import { FullCard } from './fullCard/fullCard';
import { ChooseUs } from './chooseUs/chooseUs';
import { Faqs } from './faqs/faqs';
import { BlogsCard } from './blogs/blogsCard';
import { NewsLetter } from './newsletter/newsletter';
import { Footer } from './footer/footer';
import { Loader_f } from './loader/loader';
import { Nav } from './nav/nav';
import {LoginPage} from './login_singup/login_signup'
import { useSelector, useDispatch } from 'react-redux';
import {  setScrollToSection } from '../component/Redux/scrollSlice';


function LandingPage() {
  const [count, setCount] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCount(false)

    }, 2000);

  }, [])
  const chooseUsRef = useRef(null);
  const loginRef = useRef(null);
  const blogsRef = useRef(null)
  const faqRef = useRef(null)

  const scrollToSection = useSelector((state) => state.scroll.scrollToSection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollToSection === 'chooseUs' && chooseUsRef.current) {
      chooseUsRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setScrollToSection(null));
    }
  
    if (scrollToSection === 'login' && loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setScrollToSection(null));
    }

    if (scrollToSection === 'blogs' && blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setScrollToSection(null));
    }
    if (scrollToSection === 'faqs' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setScrollToSection(null));
    }
  }, [scrollToSection, dispatch]);
  



  return (
    <>
      {count ? (
        <Loader_f />
      ) : (
        <div style={{ overflow: 'hidden' }}>
          <Nav chooseUsRef={chooseUsRef}/>
          <Navbar />
          <Cards />
          <FullCard />
          <ChooseUs  ref={chooseUsRef}/>
          <LoginPage  ref={loginRef}/>
          <BlogsCard ref={blogsRef}/>
          <Faqs ref={faqRef}/>

          <NewsLetter/>
          <Footer/>

      
        </div>
      )}

    </>
  )
}

export default LandingPage;
