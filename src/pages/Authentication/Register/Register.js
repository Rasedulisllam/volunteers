import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logos/Group_1329.png'
import './Register.css'

const Register = () => {
    const {signInWithGoogle,setUser,setErr}=useAuth();
    const location =useLocation();
    const history=useHistory();
    const redirect_uri=location?.state?.from || '/';

    // handleGoogleSignIn
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
            .then(result => {
                const user =result.user;
                setUser(user)
                history.push(redirect_uri)
            })
            .catch(err => {
                setErr(err.message)
            })

    }
    return (
        <div className='py-5 register-main' style={{height:'100vh'}}>
            <img width='260px' src={logo} alt="brand-logo" />
            <div className='register-form'>
                <h2>Login with</h2>
               <button onClick={handleGoogleSignIn} > <small>continue with google</small></button>
               <span>
                    Donot have acount?
                    <a href="#"> create an acount</a>
               </span>
            </div>
        </div>
    );
};

export default Register;