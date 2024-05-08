import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";
import axios from "axios";


function Dashboard(){
    const[response, setResponse] = useState("")
    const[balance, setBalance] = useState("")

    const getUserData = async()=>{
        try {
            const response = await axios({
                            method:"get",
                            url:"http://localhost:3000/api/v1/user/dashboard",
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
            })
            console.log(response)
            setResponse(response)
        } catch (error) {
            console.error(error.response)
        }
        getUserData()
    }
    const getUserBalance = async()=>{
        try {
            const balance = await axios({
                method:"get",
                url:"http://localhost:3000/api/v1/account/balance",
                headers:{
                    Authorization: "Bearer" + localStorage.getItem("token")
                }
            })
            console.log(balance)
            setBalance(balance)
        } catch (error) {
            console.error(error.balance)
        }
        getUserBalance()
    }
    return(
        <div className="bg-gray-100 h-screen m-0 p-0"> 
            <Navbar firstName={response.data.firstName}/>
            <h1 className="text-2xl">Your Balance is ₹{balance}</h1>
            <div className="flex flex-col items-center">
                <ContactList />
            </div>
        </div>
    )
}

export default Dashboard;