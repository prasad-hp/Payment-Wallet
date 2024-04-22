import React from "react";

function Heading({heading}){
    return(
        <div>
            <h1 className="text-5xl text-blue-700 font-semibold font-sans p-4">
                {heading}
            </h1>
        </div>
    )
}
export default Heading;