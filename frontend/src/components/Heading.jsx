import React from "react";

function Heading({heading}){
    return(
        <div>
            <h1 className="text-6xl text-blue-700 font-semibold font-sans p-3">
                {heading}
            </h1>
        </div>
    )
}
export default Heading;