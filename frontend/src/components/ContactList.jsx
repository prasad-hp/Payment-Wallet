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
                url:`https://payment-wallet-r05x.onrender.com/api/v1/user/bulk?filter=${inputText}`,
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
        <div className="flex flex-col items-center bg-blue-300 sm:w-1/2 lg:w-1/3 p-10 rounded-xl min-w-96 h-5/6">
            <h2 className=" font-sans my-3 text-white font-semibold text-6xl">Search to Transfer</h2>
            <form onChange={handleChange} className="w-full my-2">
                <input type="text" placeholder="Search Your Contacts" className="h-12 rounded-lg w-full " value={inputText} onChange={(event)=>{setInputText(event.target.value)}} />
            </form>
            <p>{message}</p>
            <div className="w-full sm:overflow-x-auto overflow-y-auto max-h-96 flex flex-col items-center">
                <div className="sm:w-11/12 w-72">
                    {searchResults.map((searchResult, index)=>{
                        return <ContactCard key={index} userData={searchResult} />
                        })}
                </div>
            </div>
        </div>
    )
}

export default ContactList;