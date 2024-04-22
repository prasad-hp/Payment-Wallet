import React from "react";
import ContactCard from "./ContactCard";

function ContactList(){
    return(
        <div className="flex flex-col items-center bg-blue-300 sm:w-1/2 lg:w-1/3 p-10 rounded-xl">
            <h2 className="text-3xl font-sans">Contacts</h2>
            <input type="text" placeholder="Search Your Contacts" className="rounded h-8"/>
            <ContactCard contactName={"Chandu"} email={"chandu@gmail.com"}/>
            <ContactCard contactName={"Spoorthy"} email={"uspoorthy@gmail.com"}/>
            <ContactCard contactName={"Ramesh"} email={"ramesh55@gmail.com"}/>
            <ContactCard contactName={"Ganesh"} email={"itsganesh@gmail.com"}/>
        </div>
    )
}

export default ContactList;