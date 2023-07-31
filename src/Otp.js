//npm i otp-input-react
//npm i react-hooks
import React, { useState } from "react";
import OtpInput, { ResendOTP } from "otp-input-react";

const Otp = () => {
  const [OTP, setOTP] = useState("");

  //Function button click
  const onClick = () => {
    //check value
    console.log(OTP);
  };
  return (
    <div
      className="font-bold fixed w-72 h-32 bg-[#FFFAFA] shadow-xl
       top-1/2 left-1/2 ml-[-144px] mt-[-64px] rounded-xl"
    >
      <div className="text-center text-[#1974BC] opacity-80 font-Prompt">
        Enter OTP password
      </div>
      <div className="mt-2 ml-4">
        <OtpInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          inputClassName="bg-[#F0FBFF] rounded max-w-[24px]  border-solid 
          border-[#aae7f9] border-[1.5px] outline-[#3c8cc4] text-[#1974BC]"
          className="justify-center"
          // secure
        />
      </div>
      <div className="text-center mt-5">
        <button
          className="complete bg-[#1974BC] text-white w-12 h-8 rounded font-Prompt"
          onClick={onClick}
        >
          OK
        </button>
      </div>
    </div>
  );
};
export default Otp;
