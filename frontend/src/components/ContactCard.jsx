import React from "react";
import { useNavigate } from "react-router-dom";

function ContactCard({userData}){
    const navigate = useNavigate()
    return(
        <div className="bg-white w-full px-2 flex justify-between p-0 rounded-xl m-5 text-center h-16 align-middle items-center">
            <div className="flex items-center align-middle">
                <img src="../../Images/defaultprofilepic.png" className="h-14"/>
                <div className="text-left">
                    <h1 className="text-xl font-medium">
                        {userData.firstName}
                    </h1>
                    <h2 className="text-gray-500">{userData.email}</h2>
                </div>
            </div>
            <button className="bg-green-600 h-8 border-black border-2 text-lg rounded-md text-white font-semibold p-1 flex items-center align-middle" onClick={()=>navigate("/transfer?id=" + userData._id + "&name=" + userData.firstName + "&email=" + userData.email)}>Transfer</button>
        </div>
    )
}

export default ContactCard;