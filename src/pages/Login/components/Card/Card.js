import "./Card.css";
import React, { useState } from "react";
import InputPassword from "../../../../components/InputPassword/InputPassword";
import LoginLogo from "../../../../assets/login-logo.svg";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [validStatus, setValidStatus] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Test" && password === "12345") {
      localStorage.setItem("jwt", "AcceptToken");
      setLoginStatus("Correct");
      navigate("/ProductTable");
    } else {
      setLoginStatus("Error");
    }
  };

  const handleValid = (field, value) => {
    setValidStatus((prevStatus) => ({
      ...prevStatus,
      [field]: value === "" ? "Error" : "Correct",
    }));
  };

  return (
    <div className="Card-container">
      <div className="Card-components">
        <img src={LoginLogo} alt="logo Rozetka" className="Login-logo"></img>
        <Input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(data) => setUsername(data.target.value)}
          onBlur={(data) => handleValid("username", data.target.value)}
        />
        {validStatus.username === "Error" && (
          <div className="Input-error">Please enter a valid name.</div>
        )}
        <InputPassword
          value={password}
          onChange={(data) => setPassword(data.target.value)}
          onBlur={(data) => handleValid("password", data.target.value)}
        />
        {validStatus.password === "Error" && (
          <div className="Input-error">Please enter a valid password.</div>
        )}
        <Button buttonText="Login" className="Button" onClick={handleLogin} />
        {loginStatus === "Correct" && (
          <div className="Login-correct">Login successful</div>
        )}
        {loginStatus === "Error" && (
          <div className="Login-error">Check your email or password</div>
        )}
      </div>
    </div>
  );
};

export default Card;
