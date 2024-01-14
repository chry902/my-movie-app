import "./style.scss";

//import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Postlogin, fetchData } from "../../Utility/http";
import RegistrationForm from "../../Component/RegistrationForm";
import LogInForm from "../../Component/loginForm";
import useStore from "../../Utility/useStore/store";

const LoginPage = () => {
  const setUserData = useStore(state => state.setUserData);

  const userData = useStore(state => state.userData);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const navigate = useNavigate();
  const setAuthenticated = useStore((state) => state.setAuthenticated);
  const { isAuthenticated } = useStore();

  const GetPost = async (body, url, isGet) => {
    const result = await Postlogin(body, url, isGet);
    console.log(result);

    if (result.success === true) {
      const url = "https://api.escuelajs.co/api/v1/auth/profile";
      const JWT_TOKEN = result.accessToken;

      localStorage.setItem("logKey", JSON.stringify(result));
      
      const userDatas = await fetchData(url, JWT_TOKEN);
      if (userDatas) {
        console.log('dati ghet arrivati e passati');
        setUserData(userDatas);
      }
      
      console.log(userData);

    } else {
      setIsToggleOn(isAuthenticated);
      isToggleOn;
    }
    if (result.success) {
      setAuthenticated(result.success);
      navigate("/");
    }
   
  };



  return (
    <div className="accessContainer">
      <h1 className="title">MyMovie</h1>

      <div className="formContainer ">
        <div className="div1">
          <LogInForm GetPost={GetPost} />
        </div>

        <button className="btnToggleReg div3" onClick={ ()=>setIsToggleOn(!isToggleOn)}>
          {!isToggleOn ? "Registrati" : "Registrato?"}
        </button>

        <div className="barra div3"></div>

        <div className="div4">
          {isToggleOn  ? <RegistrationForm GetPost={GetPost} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
