import React from "react";

function Button({submit, onClick, type}){
    return(
        <div className="w-full flex align-middle justify-center">
            <button className="border-2 w-10/12 rounded-md h-12 bg-sky-600 text-white text-3 my-8" type={type} onClick={onClick}>{submit}</button>
        </div>
    )
}

export default Button;