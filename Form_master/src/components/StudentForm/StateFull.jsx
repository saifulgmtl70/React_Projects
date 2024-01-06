import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] =  useState(null);

    const [password, setPassword] = useState(null);

    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length < 6){
            setError("Password must be 6 character or longer");
        }
        else{
            setError('');
            console.log(email, password);
  
        }
        
    }

    const handleEmailChange = (e) =>{

        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{

        setPassword(e.target.value)
    }

    return (
        <div>
            <div className="mx-auto bg-slate-300 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg bg-white py-12 rounded-md">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                    </p>

                    <form action="" onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" onChange={handleEmailChange} className="w-full rounded-lg border-slate-600 p-4 pe-12 text-lg shadow-lg" name="email" placeholder="Enter email"/>
                            </div>
                        </div>

                        <div>
                            <label className="sr-only">Password</label>

                            <div className="relative">
                                <input type="password" onChange={handlePasswordChange}  className="w-full rounded-lg border-rose-700 p-4 pe-12 text-lg shadow-lg" name="password" placeholder="Enter password"/>
                            </div>
                        </div>

                        <input type="submit" className="block w-full rounded-lg cursor-pointer bg-rose-600 px-5 py-3 text-sm font-medium text-white" value="Sign in" />


                        {
                            error && <p> {error} </p>
                        }

                    </form>
                </div>
            </div>
        </div>
    );
};

export default StateFullForm;