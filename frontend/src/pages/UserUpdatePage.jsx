import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UserUpdatePage(){
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [password, setPassword] = useState(null)
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
                            url:"http://localhost:3000/api/v1/user/dashboard",
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
            })
            setUserName(response.data.firstName)
        } catch (error) {
            setMessage(error.response.data.message)
        }
        
    }


    const handleSubmit = async(event)=>{
        event.preventDefault()
        try {
                        const response = await axios({
                    method: "put",
                    url:"http://localhost:3000/api/v1/user",
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        password: password},
                    headers:{
                        Authorization:"Bearer " + localStorage.getItem("token")
                    }
            })
                setMessage(response.data.message)
                navigate("/dashboard")
        
        } catch (error) {
            setMessage(error.response.data.message)
            
        }
    }
    const page = <div className="max-h-screen h-screen bg-gray-200">
                    <Navbar firstName={userName}/>
                    <div className="flex h-5/6 my-2 justify-center items-center">
                        <div className="bg-white w-full py-10 lg:w-3/12 flex flex-col items-center rounded-xl md:w-1/3 min-w-80 max-w-96">
                            <Heading heading={"Update User"}  />
                            <p className="text-gray-800">Plase Enter your details Update Account</p>
                            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
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