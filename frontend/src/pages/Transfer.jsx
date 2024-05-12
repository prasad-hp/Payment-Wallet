import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";
import ContactCardTransfer from "../components/ContactCardTransfer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function TransferPage(){
    const [amount, setAmount] = useState(0)
    const [status, setStatus] = useState("")
    const [receiverData] = useSearchParams()
    const id = receiverData.get("id");
    const firstName = receiverData.get("name");
    const email = receiverData.get("email")
    const[userName, setUserName] = useState("")
    const[balance, setBalance] = useState("")
    const[isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(()=>{
        setIsLoggedIn(localStorage.getItem("token"))
        getUserData()
        getUserBalance()
    }, [amount])


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
    if(amount<0){
        setAmount(0)
    }
    const transferFunds = async(event)=>{
        event.preventDefault()
        try {
            const response = await axios({
                            method:"post",
                            url:"https://payment-wallet-r05x.onrender.com/api/v1/account/transfer",
                            data:{
                                to:id,
                                amount: amount
                            },
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
        setAmount(0)
        setStatus(response.data.message)
        } catch (error) {
            setStatus(error.response.data.message)
        }   
    }
    const page =<div className="max-h-screen h-screen bg-gray-200">
                    <Navbar firstName={userName}/>
                    <h1 className="text-2xl">Your Balance is ₹{balance}</h1>
                    <div className="bg-gray-200 flex justify-center md:pt-16 m-2">
                        <div className="bg-white w-full pt-5 px-2 flex flex-col items-center pb-5 rounded-xl md:w-1/3 max-w-lg min-w-md h-full py-5">
                            <Heading heading={"Transfer Fund"} />
                            <ContactCardTransfer contactName={firstName} email={email}/>
                            <form onSubmit={transferFunds} className="w-full flex flex-col items-center h-52">
                                <div type= "input" className="w-full flex flex-col items-center">
                                    <InputField input={"Enter the Amount"} placeholder={"Please Enter the Amount"} type ="number" onChange={(event)=>setAmount(event.target.value)} value={amount}/>
                                </div>
                                <p>{status}</p>
                                <div className="w-full flex align-middle justify-center">   
                                    <button className="border-2 w-10/12 rounded-md h-12 bg-green-600 text-white text-3 py-2 md:my-5 my-5" type="submit">Initiate Tranfer</button>
                                </div>
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

export default TransferPage;