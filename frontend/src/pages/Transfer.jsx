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

    if(amount<0){
        setAmount(0)
    }
    const transferFunds = async(event)=>{
        event.preventDefault()
        try {
            const response = await axios({
                            method:"post",
                            url:"http://localhost:3000/api/v1/account/transfer",
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
            console.error(error)
        }   
    }

    return(
        <div className="h-screen">
            <Navbar firstName=""/>
            <div className="bg-gray-200 flex justify-center h-5/6 items-center">
                <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                    <Heading heading={"Transfer Fund"} />
                    <ContactCardTransfer contactName={firstName} email={email}/>
                    <form onSubmit={transferFunds} className="w-full flex flex-col items-center">
                        <div type= "input" className="w-full flex flex-col items-center">
                            <InputField input={"Enter the Amount"} placeholder={"Please Enter the Amount"} type ="number" onChange={(event)=>setAmount(event.target.value)} value={amount}/>
                        </div>
                        <p>{status}</p>
                        <div className="w-full flex align-middle justify-center">   
                            <button className="border-2 w-10/12 rounded-md h-10 bg-green-600 text-white text-3 my-4" type="submit">Initiate Tranfer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TransferPage;