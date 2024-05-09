import React from "react";

function ContactCardTransfer({contactName, email}){
    return(
        <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center h-68 p-0 rounded-xl md:w-1/3 mx-5 text-center">
            <img src="../../Images/defaultprofilepic.png" className="max-w-48" />
            <div>
                <h1 className="text-xl font-medium">
                    {contactName}
                </h1>
                <h2>{email}</h2>
            </div>

        </div>
    )
}

export default ContactCardTransfer;