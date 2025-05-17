import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from "./appBar/mainComponent.jsx";
import { Loader } from './loader/loader.jsx';
import LandingPage from '../component/landingPage.jsx';
import { Loader_f } from '../component/loader/loader.jsx';




export const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 2000);

  }, [])
  return (
    <div>
      
      {loading ? (

        <Loader_f />
      ) : (

        <ResponsiveDrawer />
      )}
      {/* <LandingPage/> */}




    </div>
  )
}
