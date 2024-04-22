import React from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";

function SignUpPage(){
    return(
        <div className="bg-gray-200 h-screen flex justify-center items-center">
            <div className="bg-white w-full py-10 lg:w-3/12 px-2 flex flex-col items-center p-0 rounded-xl md:w-1/3 mx-5">
                <Heading heading={"SignUp"} />
                <p className="text-gray-800">Plase Enter your details to Create Account</p>
                <InputField input={"First Name"} placeholder={"Enter Your First Name"}/>
                <InputField input={"Last Name"} placeholder={"Enter Your Last Name"}/>
                <InputField input={"Email"} placeholder={"Enter Email Address"}/>
                <InputField input={"Password"} placeholder={"Enter Password"} />
                <InputField input={"Confirm Password"} placeholder={"Confirm Password"} />
                <Button submit={"Submit"} />
                <p>Already Created Account ? <a href="./login">LogIn</a></p>
            </div>
        </div>
    )
}

export default SignUpPage;