import React from "react";

function ContactCardTransfer({contactName, email}){
    return(
        <div className="bg-white w-10/12 sm:h-56 h-52 py-2 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-1 text-center min-w-72">
            <img src="../../Images/defaultprofilepic.png" className="sm:max-w-44 w-28" />
            <div>
                <h1 className="text-2xl sm:text-3xl font-medium">
                    {contactName}
                </h1>
                <h2 className="text-xl sm:text-2xl">{email}</h2>
            </div>

        </div>
    )
}

export default ContactCardTransfer;