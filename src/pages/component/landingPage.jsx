import { useEffect, useState } from 'react'
import { Navbar } from '../component/navbar/navbar'
import { Cards } from './cards/cards';
import { FullCard } from './fullCard/fullCard';
import { ChooseUs } from './chooseUs/chooseUs';
import { Faqs } from './faqs/faqs';
import LoginPage from './login_singup/login_signup';
import { BlogsCard } from './blogs/blogsCard';
import { NewsLetter } from './newsletter/newsletter';
import { Footer } from './footer/footer';
import { Loader_f } from './loader/loader';


function LandingPage() {
  const [count, setCount] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCount(false)

    }, 2000);

  }, [])

  return (
    <>
      {count ? (
        <Loader_f />
      ) : (
        <div style={{ overflow: 'hidden' }}>
          <Navbar />
          <Cards />
          <FullCard />
          <ChooseUs />
          <Faqs/>
          <LoginPage/>
          <BlogsCard/>
          <NewsLetter/>
          <Footer/>

      
        </div>
      )}

    </>
  )
}

export default LandingPage;
