import React from "react";

function InputField({placeholder, input}){
    return(
        <div className="w-10/12 p-1">
                <h1 className="font-semibold">{input}</h1>
            <div className="flex justify-center">
                <input type="text" placeholder={placeholder} className="h-10 border rounded-md w-full border-gray-500"/>
            </div>
        </div>
    )
}
export default InputField;