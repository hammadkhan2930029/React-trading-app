// import React from 'react';
// import logo from '../../../images/logo.png';
// import './developers.css';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { motion, useInView } from "framer-motion";

// export const Developers = () => {
//     const refOne = React.useRef(null);
//     const inViewOne = useInView(refOne, { triggerOnce: true });
//     return (
//         <motion.div className='developers_page'
//             ref={refOne}
//             initial={{ opacity: 0, y: -100 }}
//             animate={inViewOne ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: .8 }}>
//             <div className='first_div'>
//                 <div className='logo_div'>
//                     <img src={logo} className='company_logo' />
//                 </div>
//                 <div className='company_name_div'>
//                     <span className='company_name'>Cogent Devs Software Solutions</span>
//                 </div>

//             </div>
//             <div className="second_div">
//                 <div className='email_div'>
//                     <EmailIcon sx={{ width: 40, height: 40, margin: 2 }} />

//                     <span className='email'>info@cogentdevs.com</span>
//                 </div>
//                 <div className='contact_div'>
//                     <PhoneIcon sx={{ width: 40, height: 40, margin: 2 }} />
//                     <span className='contact'>+92-331-9998780</span>
//                 </div>

//             </div>
//             <div className="third_div">
//                 <div className="socialIcons">
//                     <FacebookIcon sx={{ width: 40, height: 40 }} />
//                 </div>
//                 <div className="socialIcons">
//                     <LinkedInIcon sx={{ width: 40, height: 40 }} />

//                 </div>
//                 <div className="socialIcons">
//                     <YouTubeIcon sx={{ width: 40, height: 40 }} />

//                 </div>
//             </div>

//         </motion.div>
//     )
// }
import React from 'react';
import logo from '../../../images/logo.png';
import { Email, Phone, Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import './developers.css';

export const Developers = () => {
  const refOne = React.useRef(null);
  const inViewOne = useInView(refOne, { triggerOnce: true });

  return (
    <motion.div
      ref={refOne}
      initial={{ opacity: 0, y: 50 }}
      animate={inViewOne ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="developers-wrapper"
    >
      {/* Animated Gradient Blobs */}
      <div className="gradient-blob blob1"></div>
      <div className="gradient-blob blob2"></div>
      <div className="gradient-blob blob3"></div>

      {/* Glass Card */}
      <div className="developers-card">
        <div className="developers-header">
          <img src={logo} alt="Company Logo" className="developers-logo" />
          <h1>Cogent Devs Software Solutions</h1>
        </div>

        <div className="developers-contact">
          <div className="contact-item">
            <Email className="contact-icon" />
            <span>info@cogentdevs.com</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span>+92-331-9998780</span>
          </div>
        </div>

        <div className="developers-socials">
          <a href="#" className="social facebook"><Facebook /></a>
          <a href="#" className="social linkedin"><LinkedIn /></a>
          <a href="#" className="social youtube"><YouTube /></a>
        </div>
      </div>
    </motion.div>
  );
};

