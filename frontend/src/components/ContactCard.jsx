import React from "react";
import { useNavigate } from "react-router-dom";

function ContactCard({userData}){
    const navigate = useNavigate()
    return(
        <div className="bg-white hover:bg-gray-200 border border-gray-400 w-full flex sm:justify-between sm:flex-row flex-col sm:p-0 rounded-xl sm:m-1.5 text-center sm:h-20 m-3 p-2 align-middle items-center">
            <div className="flex items-center align-middle p-0 m-0">
                <img src="../../Images/defaultprofilepic.png" className="h-10 ml-2"/>
                <div className="text-left ml-2">
                    <h1 className="text-xl font-medium">
                        {userData.firstName}
                    </h1>
                    <h2 className="text-gray-500">{userData.email}</h2>
                </div>
            </div>
            <button className="sm:bg-green-400 bg-green-600 hover:bg-green-600  h-10 border-black border-1 text-lg rounded-md text-white font-semibold px-2 m-1 mr-2 flex items-center align-middle" onClick={()=>navigate("/transfer?id=" + userData._id + "&name=" + userData.firstName + "&email=" + userData.email)}>Transfer</button>
        </div>
    )
}

export default ContactCard;