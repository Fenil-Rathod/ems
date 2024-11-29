import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

    return(
        <div className="flex items-center justify-center  h-screen w-screen">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form 
                onSubmit={(e)=> {
                    submitHandler(e)
                }}
                className="flex flex-col items-center justify-center"
                > 
                    <input 
                    value={email}
                    onChange={(e)=> {
                        setEmail(e.target.value);
                    }}
                    required className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full text-xl px-6 py-2" type="Email" placeholder="Enter Email"/> 
                    <input 
                    value={password}
                    onChange={(e)=> {
                        setPassword(e.target.value);
                    }}
                    required className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full text-xl mt-4 px-6 py-2" type="Password" placeholder="Enter Password"/>
                    <button className="text-white outline-none placeholder:text-white border-none bg-emerald-600 hover:bg-emerald-700 font-semibold rounded-full text-lg w-full mt-7 py-2 px-8">Login</button> 
                </form>
            </div>
        </div>
    )
}
export default Login;