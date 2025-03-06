import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion";
import one from '../../../images/one.jpg'
import avatar from '../../../images/avatar.jpg'
import './editeProfile.css'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const EditeProfile = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    // -----------------------------------------------
    const [avatar_picker, setAvatar_picker] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar_picker(reader.result);
            reader.readAsDataURL(file);
        }
    };
    return (
        <motion.div className='edite_profile'>
            <motion.div
                className='edite' >
                <motion.div
                    className='edite_image_div'
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>
                    <img src={one} className='edite_image' />
                </motion.div>
                <motion.div
                    className='edite_profile_form'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>
                    <Formik
                        initialValues={{
                            email: '',
                            contact: '',
                            number: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ handleBlur, handleChange, handleSubmit, values }) => (

                            <div className='e_form'>
                                <span className='h6'>Edit Profile</span>
                                <motion.div
                                    className='view_profile'
                                    ref={refOne}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: .7 }}
                                   >
                                    <img
                                        src={avatar_picker || avatar}
                                        className="profile_image_view"
                                        alt="Profile"
                                        onClick={() => fileInputRef.current.click()}
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />

                                    {/* Add Icon Click to Open File Picker */}
                                    <AddCircleIcon
                                        className="addIcon"
                                        style={{ cursor: "pointer" ,color:'#000'}}
                                        onClick={() => fileInputRef.current.click()}
                                    />
                                    <span className='userName'>User Name</span>


                                </motion.div>


                                <TextField
                                    placeholder='email'
                                    name='email'
                                    id="outlined-required"
                                    label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='e_input'
                                    type='text'

                                />
                                <TextField
                                    placeholder='Number'
                                    name='number'
                                    id="outlined-required"
                                    label="Conatct"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.number}
                                    className='e_input'
                                    type='number'

                                />
                                <TextField
                                    placeholder='password'
                                    name='password'
                                    id="outlined-required"
                                    label="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='e_input'
                                    type='password'

                                />
                                <TextField
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    id="outlined-required"
                                    label="Confirm password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className='e_input'
                                    type='password'

                                />
                                <Button variant="contained" disableElevation className='e_btn' onClick={handleSubmit}>
                                    Register
                                </Button>
                            </div>
                        )}

                    </Formik>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}
