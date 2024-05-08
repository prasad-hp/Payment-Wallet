import React, { useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ContactCardTransfer from "../components/ContactCardTransfer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function TransferPage(){
    const [amount, setAmount] = useState(0)
    const [receiverData] = useSearchParams()
    const id = receiverData.get("id");
    const firstName = receiverData.get("name");
    const email = receiverData.get("email")
    console.log(receiverData)
    if(amount<0){
        setAmount(0)
    }
    const transferFunds = async(event)=>{
        event.preventDefault()
        try {
            await axios({
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
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"Transfer Fund"} />
                <ContactCardTransfer contactName={firstName} email={email}/>
                <form onSubmit={transferFunds} className="w-full flex flex-col items-center">
                    <InputField input={"Enter the Amount"} placeholder={"Please Enter the Amount"} type ="input" onChange={(event)=>setAmount(event.target.value)} value={amount}/>
                    <div className="w-full flex align-middle justify-center">   
                        <button className="border-2 w-10/12 rounded-md h-10 bg-green-600 text-white text-3 my-4" type="submit">Initiate Tranfer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TransferPage;