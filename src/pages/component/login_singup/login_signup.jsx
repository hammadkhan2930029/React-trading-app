import React,{ useState } from 'react';
import { Login } from '../login/login';
import { Register } from '../registrationForm/register';
import { ForgotPassword } from '../forgotPassword/forgotPassword';
import './login_signup.css'
import { motion, useInView } from "framer-motion";

function LoginPage() {
    const [view, setView] = useState('login'); // Default 'login'
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <motion.div className='login_signup_main'>
            <motion.div className='view' ref={refOne}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                {view === 'login' && <Login />}
                {view === 'register' && <Register />}
                {view === 'forgot' && <ForgotPassword />}
            </motion.div>


            <motion.div className='loginBtnPage' ref={refTwo}
                initial={{ opacity: 0, x: 100 }}
                animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                <button onClick={() => setView('login')} className='loginBtn'>Login</button>
                <button onClick={() => setView('register')} className='loginBtn'>Register</button>
                <button onClick={() => setView('forgot')} className='loginBtn'>Forgot Password</button>
            </motion.div>
        </motion.div>
    );
}

export default LoginPage;
