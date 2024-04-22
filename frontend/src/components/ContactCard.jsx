import React from "react";

function ContactCard({contactName, email}){
    return(
        <div className="bg-white w-full px-2 flex justify-between p-0 rounded-xl m-5 text-center h-16 align-middle items-center">
            <div className="flex items-center align-middle">
                <img src="../../Images/defaultprofilepic.png" className="h-14"/>
                <div className="text-left">
                    <h1 className="text-xl font-medium">
                        {contactName}
                    </h1>
                    <h2 className="text-gray-500">{email}</h2>
                </div>
            </div>
            <button className="bg-green-600 h-8 border-black border-2 text-lg rounded-md text-white font-semibold p-1 flex items-center align-middle">Transfer</button>
        </div>
    )
}

export default ContactCard;