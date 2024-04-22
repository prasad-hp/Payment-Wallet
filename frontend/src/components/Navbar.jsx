import React from "react";

function Navbar({firstName}){
    return(
        <div className="flex justify-between p-2 h-20 bg-white">
            <img src="../../Images/NavLogo.png" className="h-full"/>
            <div className="flex justify-end items-center">
                <h2 className="m-2 p-2 font-semibold">Hello, {firstName}</h2>
                <img src="../../Images/defaultprofilepic.png" className="h-full" />
            </div>
        </div>
    )
}

export default Navbar;