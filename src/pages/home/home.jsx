import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from "./appBar/mainComponent.jsx";
import { Loader } from './loader/loader.jsx';
import { Loader_f } from '../component/loader/loader.jsx';
import FrontPage from '../component/frontPage.jsx';
import { Holdings } from './Holdings/holdings.jsx';




export const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 2000);

  }, [])
  return (
    <div>

      {/* {loading ? (

        <Loader_f />
      ) : (

        <ResponsiveDrawer />
      )} */}
      <FrontPage />



    </div>
  )
}
