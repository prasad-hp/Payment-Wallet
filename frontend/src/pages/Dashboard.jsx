import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import axios from "axios";



function Dashboard(){
    const[userName, setUserName] = useState("")
    const[balance, setBalance] = useState("")
    const [message, setMessage] = useState("")

    useEffect(()=>{
        getUserData()
        getUserBalance()
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
    const getUserBalance = async()=>{
        try {
            const response = await axios({
                method:"get",
                url:"http://localhost:3000/api/v1/account/balance",
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setBalance(response.data)
        } catch (error) {
            console.error(error.response)
        }
        
    }
    return(
        <div className="bg-gray-100 h-screen m-0 p-0"> 
            <Navbar firstName={userName}/>
            <h1 className="text-2xl">Your Balance is ₹{balance}</h1>
            <div className="flex flex-col items-center">
                <p>{message}</p>
                <ContactList />
            </div>
        </div>
    )
}

export default Dashboard;