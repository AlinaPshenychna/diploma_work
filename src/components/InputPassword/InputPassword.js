import "./InputPassword.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Input from "../Input/Input";
import React, { useState } from "react";

const InputPassword = ({ value, onChange, onBlur }) => {
  const [isEyeOn, setIsEyeOn] = useState(true);
  const handleClick = () => {
    setIsEyeOn(!isEyeOn);
  };

  return (
    <div className="InputPassword-main">
      <Input
        type={isEyeOn ? "password" : "text"}
        placeholder="Password"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="Input-Eye-icon" onClick={handleClick}>
        {isEyeOn ? <IoEye /> : <IoEyeOff />}
      </span>
    </div>
  );
};
export default InputPassword;
