import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({firstName}){
    const navigate = useNavigate()

    function logOut(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return(
        <div className="flex justify-between p-2 h-20 bg-white">
            <img src="../../Images/NavLogo.png" className="h-full hover:cursor-pointer" onClick={()=>navigate("/dashboard")}/>
            <div className="flex justify-end items-center">
                <h2 className="m-2 p-2 font-semibold">Hello, {firstName}</h2>
                <img src="../../Images/defaultprofilepic.png" className="h-full max-h-20" />
                <button className="bg-red-500 w-20 h-8 rounded-md text-white" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;