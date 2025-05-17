import React from "react";
import "./profile.css";
import avatar from '../../../images/avatar.jpg';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { setEditeProfile } from "../Redux/profileSlice";
import { motion, useInView } from "framer-motion";

const ProfilePage = () => {
  const dispatch = useDispatch()
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);

  const inViewOne = useInView(refOne, { triggerOnce: true });
  const inViewTwo = useInView(refTwo, { triggerOnce: true });
  return (
    <motion.div className="profile-container">

      <motion.div className="profile-card"
        ref={refOne}
        initial={{ opacity: 0, y: -100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
        <div className="edite_icon_div" onClick={() => dispatch(setEditeProfile())}>
          <EditIcon style={{ fontSize: 32 }} />
        </div>
        <img
          src={avatar}
          alt="User Avatar"
          className="profile-img"
        />
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-role">Full Stack Developer</p>
        <p className="profile-location">San Francisco, CA</p>

      </motion.div>
      <motion.div className="profile-details"
        ref={refOne}
        initial={{ opacity: 0, y: 100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
        <h3>Personal Information</h3>
        <ul>
          <li><strong>Email:</strong> john.doe@example.com</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Filer Or Non-filer:</strong> Yes</li>

          <li><strong>Address:</strong> San Francisco, CA</li>
        </ul>
        <h3>Social Links</h3>
        <ul className="social-links">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;
