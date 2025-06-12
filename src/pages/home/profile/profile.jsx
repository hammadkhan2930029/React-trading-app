import React, { useState } from "react";
import "./profile.css";
import avatar from '../../../images/avatar.jpg';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { setEditeProfile } from "../Redux/profileSlice";
import { motion, useInView } from "framer-motion";
import { EditeProfile } from "../editeProfile/editeProfile";
import { TotalInvestment } from "./totalInvestment/totalInvestmentForm";
import { Withdrawal } from "./withdraw/withdrawal";

const ProfilePage = () => {
  const [profileComponents, setProfileComponents] = useState(1)
  const dispatch = useDispatch()
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);

  const inViewOne = useInView(refOne);
  const inViewTwo = useInView(refTwo);
  console.log('set profile compoennet', profileComponents)
  return (
    <div>
      <div className="profile-container">
        <motion.div className="profile_side_bar"
        >
          <motion.div className="profile-card">

            <img
              src={avatar}
              alt="User Avatar"
              className="profile-img"
            />
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-role">Full Stack Developer</p>
            <p className="profile-location">San Francisco, CA</p>

          </motion.div>
          <div className="profile_menu">
            <span className="menu_items" style={{ backgroundColor: profileComponents === 1 && '#007bff', color: profileComponents === 1 && '#fff' }} onClick={() => setProfileComponents(1)}>Profile Details</span>
            <span className="menu_items" style={{ backgroundColor: profileComponents === 2 && '#007bff', color: profileComponents === 2 && '#fff' }} onClick={() => setProfileComponents(2)}>Edite Profile</span>
            <span className="menu_items" style={{ backgroundColor: profileComponents === 3 && '#007bff', color: profileComponents === 3 && '#fff' }} onClick={() => setProfileComponents(3)}>Total investemnt</span>
            <span className="menu_items" style={{ backgroundColor: profileComponents === 4 && '#007bff', color: profileComponents === 4 && '#fff' }} onClick={() => setProfileComponents(4)}>Withdrawal</span>




          </div>

        </motion.div>
        <div className="profile_Components">
          {profileComponents === 1 && (

            <motion.div
              key="profile-details"
              className="profile-details">
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Email:</strong> john.doe@example.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Filer Or Non-filer:</strong> Yes</li>

                <li><strong>Address:</strong> San Francisco, CA</li>
              </ul>

            </motion.div>)}

          {profileComponents === 2 && (<EditeProfile />)}
          {profileComponents === 3 && (<TotalInvestment />)}
          {profileComponents === 4 && (<Withdrawal />)}



        </div>

      </div>
    </div>

  );
};

export default ProfilePage;
