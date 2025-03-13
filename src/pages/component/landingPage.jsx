import { useEffect, useState } from 'react'
import { Navbar } from '../component/navbar/navbar'
import { Cards } from '../component/cards/cards'
import { FullCard } from '../component/fullCard/fullCard'
import { ChooseUs } from '../component/chooseUs/chooseUs'
import { Latest } from '../component/latestProducts/latestProduct'
import { Faqs } from '../component/faqs/faqs'
import { NewsLetter } from '../component/newsletter/newsletter'
import { Footer } from '../component/footer/footer'
import { Loader } from '../component/loader/loader'
// import './App.css';
import LoginPage from '../component/login_singup/login_signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Loader />
      ) : (
        <div style={{ overflow: 'hidden' }}>
          <Navbar />
          <Cards />
          <FullCard />
          <ChooseUs />
          <Latest />
          <Faqs />
          <LoginPage />
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  )
}

export default LandingPage;
