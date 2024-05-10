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
                <h2 className="sm:m-2 sm:p-2 m-1 p-1 font-semibold">Hello, {firstName}</h2>
                <button className="bg-gray-400 w-28 h-8 rounded-md text-white border-black border font-medium hover:bg-slate-600 sm:mx-3 mx-1" onClick={()=>navigate("/update")}>Update Profile</button>
                <button className="bg-red-400 w-20 h-8 rounded-md text-white border-black border font-medium hover:bg-red-600" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;