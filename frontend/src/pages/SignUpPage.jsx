import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function SignUpPage(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [message, setMessage] = useState("")


    const handleSubmit = async(event)=>{
        event.preventDefault()
        setMessage("Loading Please Wait")
        try {
                        const response = await axios({
                    method: "post",
                    url:"https://payment-wallet-r05x.onrender.com/api/v1/user/signup",
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                }
            })
                setMessage(response.data.message)
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
        
        } catch (error) {
            setMessage(error.response.data.message)
            
        }
    }
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"SignUp"} />
                <p className="text-gray-800 text-xl">Plase Enter your details to Create Account</p>
                <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                    <InputField input={"First Name"} placeholder={"Enter Your First Name"} value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
                    <InputField input={"Last Name"} placeholder={"Enter Your Last Name"} value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
                    <InputField input={"Email"} placeholder={"Enter Email Address"} value = {email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    <InputField input={"Password"} type={"password"} placeholder={"Enter Password"} value ={password} onChange={(event)=>{setPassword(event.target.value)}}/>    
                    <p>{message}</p>
                    <Button submit={"Submit"} type="submit" />
                </form>
                <p className="text-xl">Already Created Account ? <a href="./login">LogIn</a></p>
            </div>
        </div>
    
    )
}

export default SignUpPage;