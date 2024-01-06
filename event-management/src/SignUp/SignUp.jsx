import { Link} from "react-router-dom";
import Header from "../Pages/Header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(null);
    // const location = useLocation();
    // const naviGate = useNavigate();


    const handleSIgnUp = (e) =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('username');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const terms = form.get('terms');
        console.log(name, photo, email, password, terms);



        if(password.length < 6){
            toast("Your password shoul be at least 6 character or more longer than 6 characters");
            return;
        }

        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            toast("Your password should contain with uppercae,lowercase,num and speical character.");
            return;
        }

        else if(!terms){
            toast("Please accept our terms and conditions");
        }




        createUser(email, password)
        .then(() =>{
            // console.log(result.user);

            toast("Account created Successfull");
            // naviGate(location?.state ? location.state : '/login');
        })
        
    }


    return (
        <section>

            <ToastContainer></ToastContainer>
            {/* Header */}
            <Header></Header>


            {/* Sign Up  */}

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">


                    <form onSubmit={handleSIgnUp} action="" className="mb-0 mt-6 space-y-8 bg-slate-50 rounded-lg p-4 shadow-2xl px-10 py-14">
                        <p className="text-center text-2xl mb-12  font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>

                            <div className="relative">
                                <input type="text" name="username" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your username here" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="photo" className="sr-only">Photo</label>

                            <div className="relative">
                                <input type="text" name="photo" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your photo url here" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" name="email" className="w-full text-lg rounded-lg border-gray-200 p-4 pe-12  shadow-sm" placeholder="Enter your email here" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input type={showPass ? "text" : "password"} name="password" className="w-full mb-5 rounded-lg border-gray-200 p-4 pe-12 text-lg shadow-sm" placeholder="Enter your password here"/>

                                <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-3 end-0 grid place-content-center px-4">
                                
                                {
                                    showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                }

                                </span>

                            </div>
                        </div>

                        <div className="col-span-6">
                        <label className="flex gap-4">
                            <input type="checkbox" id="MarketingAccept" name="terms" className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"/>

                            <span className="text-sm text-gray-700">
                               I accept your tearms & conditions
                            </span>
                        </label>

                    </div>

                        <button type="submit" className="block w-full mt-12 rounded-lg bg-rose-600 px-5 py-3 text-lg font-medium text-white">Sign Up </button>

                        <p className="text-center text-sm text-gray-500">
                            Already have an account?
                            <Link to="/login" className="text-rose-600 text-medium" > Login</Link>
                        </p>
                    </form>
                </div>
            </div>


        </section>
    );
};

export default SignUp;