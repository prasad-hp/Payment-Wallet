import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate()
    const [message, setMessage] = useState("")


    const handleSubmit= async(event)=>{
        event.preventDefault()
        try {
            const response = await axios({
                method:"post",
                url:"http://localhost:3000/api/v1/user/login",
                data:{
                    email:email,
                    password: password
                }
            })
            localStorage.setItem("token", response.data.token)
            setMessage(response.data.message)
            navigate("/dashboard")
            
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"Login"} />
                <p>Please Enter your details to Login</p>
                <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                    <InputField input={"Email"} placeholder={"Enter Email Address"}  value={email} onChange={(event)=>setEmail(event.target.value)}/>
                    <InputField input={"Password"} placeholder={"Enter the Password"} type={password} value={password} onChange={(event)=>setPassword(event.target.value)} />
                    <p>{message}</p>
                    <Button submit={"Submit"} type="submit" />
                </form>
                <p>Account not Created ? <a href="./signup" >SignUp</a></p>
            </div>
        </div>
    )
}
export default LoginPage;