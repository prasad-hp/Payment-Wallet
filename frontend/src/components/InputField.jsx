import React from "react";

function InputField({placeholder, input, value, onChange, type}){
    return(
        <div className="w-10/12 p-1 h-20 my-1">
                <h1 className="font-semibold text-lg">{input}</h1>
            <div className="flex justify-center">
                <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="h-12 border rounded-md w-full border-gray-500"></input>
            </div>
        </div>
    )
}
export default InputField;