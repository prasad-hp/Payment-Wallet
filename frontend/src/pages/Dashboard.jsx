import React from "react";
import Navbar from "../components/Navbar";
import ContactList from "../components/ContactList";


function Dashboard(){
    return(
        <div className="bg-gray-100 h-screen m-0 p-0"> 
            <Navbar firstName={"Prasad"}/>
            <h1 className="text-2xl">Your Balance is ₹1000</h1>
            <div className="flex flex-col items-center">
                <ContactList />
            </div>
        </div>
    )
}

export default Dashboard;