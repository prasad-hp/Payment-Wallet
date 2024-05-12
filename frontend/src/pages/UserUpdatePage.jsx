import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UserUpdatePage(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const[userName, setUserName] = useState("")
    const[isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("token"))
        getUserData()
    }, [])

    const getUserData = async()=>{
        try {
            const response = await axios({
                            method:"get",
                            url:"https://payment-wallet-r05x.onrender.com/api/v1/user/dashboard",
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
            })
            setUserName(response.data.firstName)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setPassword(response.data.password)
        } catch (error) {
            setMessage(error.response.data.message)
        }
        
    }


    const handleSubmit = async(event)=>{
        event.preventDefault()
        setMessage("Loading Please Wait")
        try {
                        const response = await axios({
                    method: "put",
                    url:"https://payment-wallet-r05x.onrender.com/api/v1/user",
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        password: password},
                    headers:{
                        Authorization:"Bearer " + localStorage.getItem("token")
                    }
            })
                setMessage(response.data.message)
        
        } catch (error) {
            setMessage(error.response.data.message)
            
        }
    }
    const page = <div className="max-h-screen h-screen bg-gray-200">
                    <Navbar firstName={userName}/>
                    <div className="flex h-5/6 justify-center items-center">
                        <div className="bg-white w-full py-10 flex flex-col items-center rounded-xl min-w-lg max-w-lg max-h-lg min-h-96 h-3/4">
                            <Heading heading={"Update User"}  />
                            <p className="text-gray-800 text-xl">Plase Enter your details Update Account</p>
                            <form className="w-full flex flex-col items-center pt-3" onSubmit={handleSubmit}>
                                <InputField input={"First Name"} placeholder={"Enter Your First Name"} value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}/>
                                <InputField input={"Last Name"} placeholder={"Enter Your Last Name"} value={lastName} onChange={(event)=>{setLastName(event.target.value)}}/>
                                <InputField input={"Password"} type={"password"} placeholder={"Enter Password"} value ={password} onChange={(event)=>{setPassword(event.target.value)}}/>    
                                <p>{message}</p>
                                <Button submit={"Submit"} type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
    return(
        <>
            {isLoggedIn ? <> {page}</> : <div>You are not Logged In Please Login</div> }
        </>
    )
}

export default UserUpdatePage;