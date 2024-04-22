import React from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";

function LoginPage(){
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"Login"} />
                <p>Please Enter your details to Login</p>
                <InputField input={"Email"} placeholder={"Enter Email Address"}/>
                <InputField input={"Password"} placeholder={"Enter Password"} />
                <Button submit={"Submit"} />
                <p>Account not Created ? <a href="./signup" >LogIn</a></p>
            </div>
        </div>
    )
}

export default LoginPage;