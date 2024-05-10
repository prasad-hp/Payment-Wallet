import React, { useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";

function ContactList(){
    const [inputText, setInputText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [message, setMessage]= useState("")

    const handleChange = async()=>{
        try {
            const response = await axios({
                method:"get",
                url:`http://localhost:3000/api/v1/user/bulk?filter=${inputText}`,
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }

            })
            setSearchResults(response.data.user)

        } catch (error) {
            setMessage(error.response.data.message)
        }
    }

    return(
        <div className="flex flex-col items-center bg-blue-300 sm:w-1/2 lg:w-1/3 p-10 rounded-xl">
            <h2 className="text-3xl font-sans my-3">Search Contacts to Send Money</h2>
            <form onChange={handleChange}>
                <input type="text" placeholder="Search Your Contacts" className="rounded h-8" value={inputText} onChange={(event)=>{setInputText(event.target.value)}} />
            </form>
            <p>{message}</p>
            {searchResults.map((searchResult, index)=>{
                return <ContactCard key={index} userData={searchResult} />
                })}
        </div>
    )
}

export default ContactList;