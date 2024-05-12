import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import axios from "axios";



function Dashboard(){
    const[firstName, setFirstName] = useState("")
    const[balance, setBalance] = useState("")
    const [message, setMessage] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    
    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("token"))
        getUserData()
        getUserBalance()
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
            setFirstName(response.data.firstName)
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    const getUserBalance = async()=>{
        try {
            const response = await axios({
                method:"get",
                url:"https://payment-wallet-r05x.onrender.com/api/v1/account/balance",
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setBalance(response.data)
        } catch (error) {
            console.error(error.response)
        }
        
    }
    const page = <div className="bg-gray-100 h-screen max-h-screen m-0 p-0"> 
                    <Navbar firstName={firstName}/>
                    <h1 className="text-3xl mx-2">Your Balance is ₹{balance}</h1>
                    <div className="flex flex-col items-center h-5/6 mx-2">
                        <p>{message}</p>
                        <ContactList />
                    </div>
                </div>
    return(
        <>
            {isLoggedIn ? <> {page}</> : <div>You are not Logged In Please Login</div> }
        </>
    )
}

export default Dashboard;