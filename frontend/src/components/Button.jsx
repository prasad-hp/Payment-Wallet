import React from "react";

function Button({submit}){
    return(
        <div className="w-full flex align-middle justify-center">
            <button className="border-2 w-10/12 rounded-md h-10 bg-sky-600 text-white text-3 my-4">{submit}</button>
        </div>
    )
}

export default Button;