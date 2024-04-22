import React from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ContactCardTransfer from "../components/ContactCardTransfer";

function TransferPage(){
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"Transfer Fund"} />
                <ContactCardTransfer contactName={"Dr. Spoorthy"} email={"uspoorthy@gmail.com"}/>
                <InputField input={"Enter the Amount"} placeholder={"Please Enter the Amount"} />
                <div className="w-full flex align-middle justify-center">
                    <button className="border-2 w-10/12 rounded-md h-10 bg-green-600 text-white text-3 my-4">Initiate Tranfer</button>
                </div>
            </div>
        </div>
    )
}

export default TransferPage;