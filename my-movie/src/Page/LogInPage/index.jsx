//import "./styles.scss";
//import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Postlogin } from "../../Utility/http";
//import RegistrationForm from "../../Components/RegistrationForm/index";
import LogInForm from "../../Component/loginForm";
import useStore from "../../Utility/useStore/store";

const LoginPage = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = {
    email: email,
    password: password,
  };
  const setLogInData = useStore((state) => state.setLogInData);
  const setAuthenticated = useStore((state) => state.setAuthenticated);
  const { isAuthenticated } = useStore();

  const GetPost = async (url, isGet) => {
    setLogInData({ email: data.email, password: data.password });
    const result = await Postlogin(data, url, isGet);
    console.log(result);

    if (result.success === true) {
      localStorage.setItem("logKey", JSON.stringify(result));
    } else {
      setIsToggleOn(isAuthenticated);
    }
    if (result.success) {
      setAuthenticated(result.success);
      navigate("/");
    }
    if (result.success === false) {
      setIsToggleOn(isAuthenticated);
    }

    if (isGet === "postLog" && result.success === true) {
      console.log("hello");
    }
  };

  // funzione di togle per far apparire form registrazione
  /*   const showRegForm = () => {
    setIsToggleOn(!isToggleOn);

    console.log(isToggleOn);
  }; */

  return (
    <div className="accessContainer">
      <h1 className="title">MyMovie</h1>

      <LogInForm
        GetPost={GetPost}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      {/*  {(loginResult && loginResult.success === true) || !null ? (
        <p>{loginResult.message}</p>
      ) : (
        <p>errore riprova</p>
      )}
      <button className="btnToggleReg" onClick={showRegForm}>
        {isToggleOn !== false ? "Registrati" : "Registrato?"}
      </button>

      {isToggleOn === true ? <RegistrationForm GetPost={GetPost} /> : ""} */}
    </div>
  );
};

export default LoginPage;
