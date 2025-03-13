import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from "framer-motion";
import './chooseUs.css';
import 'react-slideshow-image/dist/styles.css'
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BrushIcon from '@mui/icons-material/Brush';
import WindowIcon from '@mui/icons-material/Window';



const data = [
  {
    url: one,
    icon: <WorkspacePremiumIcon className="icon" />,
    heading: 'Premium Craftsmanship',
    data1: 'Made from high-quality materials with exquisite detailing to ensure durability and elegance.',




  },
  {
    url: two,
    icon: <BrushIcon className="icon" />,
    heading: 'Stylish & Versatile Designs',
    data1: 'Trendy yet functional styles that complement every occasion, from casual outings to formal events.',



  },
  {
    url: three,
    icon: <WindowIcon className="icon" />,
    heading: 'Spacious & Organized Interior',
    data1: 'Thoughtfully designed compartments to keep your essentials neatly arranged and easily accessible.',



  },

];
export const ChooseUs = () => {
  const [currentImage, setCurrentImage] = useState(one);
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: true });
  const inViewTwo = useInView(refTwo, { triggerOnce: true });
  return (
    <motion.div className='chooseUs'>
      <motion.div
        className="choseOne"
        ref={refOne}
        initial={{ opacity: 0, x: -100 }}
        animate={inViewOne ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: .8 }}>

        <span className='h1'>We are providing best and high quality products.</span>
        <div className='line'></div>
        {data.map((item, index) => (
          <div key={index} className="card-container" onMouseEnter={() => setCurrentImage(item.url)}>
            <motion.div className="highQuality">
              <motion.div >
                <motion.div className="shap2">
                  {item.icon}
                </motion.div>
              </motion.div>


              <motion.div
                className="textarea"

              >
                <span className="h1">{item.heading}</span>
                <span className="h2">{item.data1}</span>
              </motion.div>
            </motion.div>


          </div>
        ))}





      </motion.div>
      {/* ------------------------------Choose tow------------------------------------- */}


      <motion.div className='choseTwo' ref={refTwo}
        initial={{ opacity: 0, x: 100 }}
        animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: .8 }}>
        <motion.div className="image-display"
         animate={{ y: [0, 20, 0] }}
         transition={{ duration: 1.5, repeat: Infinity }}>
          <img
            src={`${currentImage}`}
            alt="Display"
            className="display-image"
          />
        </motion.div>
      </motion.div>



    </motion.div>
  )
}

