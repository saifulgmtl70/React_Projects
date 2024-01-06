import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Pages/Header/Header";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { sendPasswordResetEmail } from "firebase/auth";



const Login = () => {

    const {auth, signIn, signInWithGoogle } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(null);


    const emailRef = useRef();
 

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast("Account created Successfully");
            naviGate(location?.state ? location.state : '/');
        } catch (error) {
            toast("An error occured");
        }
    };
   

    const location = useLocation();
    const naviGate = useNavigate();

    const handleLogIn = (e) =>{
        e.preventDefault();
        // console.log(e.currentTarget);

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        // console.log(email, password);

        if(password.length < 6){
            toast("Your password shoul be at least 6 character or more longer than 6 characters");
            return;
        }


        signIn(email, password)
        .then(() =>{
            toast("Account created Successfull");
            naviGate(location?.state ? location.state : '/');
        })
        .catch(() =>{
            toast("An error occured");
        })
    }



    const handleForgetPass = async () => {
        try {
          const email = emailRef.current.value;
      
          if (!email) {
            toast("Please enter your email address.");
            return;
          }
      
          await sendPasswordResetEmail(auth, email);
          toast("Password reset link sent to your email.");
        } catch (error) {
          console.error("Password reset error:", error);
          toast("An error occurred while sending the reset link.");
        }
    };
      

    
    

    return (
 
        <section>

            <ToastContainer></ToastContainer>
            {/* hHader */}
            <Header></Header>
            {/* Login Form */}

             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">


                    <form onSubmit={handleLogIn} action="" className="mb-0 mt-6 space-y-8 bg-slate-50 rounded-lg p-4 shadow-2xl px-10 py-14">
                        <p className="text-center text-2xl mb-12  font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" ref={emailRef} name="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your email here" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input type={showPass ? "text" : "password"} name="password" className="w-full mb-5 rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm" placeholder="Enter your password here"/>

                                <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-10 end-0 grid place-content-center px-4">
                                
                                {
                                    showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                }

                                </span>
                                <button onClick={handleForgetPass} href="" className='justify-start text-left'>Forgot Password?</button>

                            </div>
                        </div>

                        <button type="submit" className="block w-full mt-12 rounded-lg bg-rose-600 px-5 py-3 text-lg font-medium text-white">Login </button>

                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>

                        </div>

                        <button onClick={handleGoogleSignIn} className="w-full flex items-center gap-3  justify-center px-5 py-3 rounded-md border border-rose-500 hover:bg-rose-400 hover:text-white hover:border-0">
                            <FcGoogle className="text-xl text-teal-900 "></FcGoogle>
                            Continue with google
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Do not have any account?
                            <Link to="/signup" className="text-rose-600 text-medium" href=""> Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;