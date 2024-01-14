/* eslint-disable react/prop-types */
import "./style.scss";
import { useState } from "react";

//import logo from "../../assets/flixflow-logo.png";

const LogInForm = ({ GetPost }) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //funzione che passa ulr credenziali e info della chiamata e fa call func post per log in
  const handleSubmit = async (e) => {
    e.preventDefault(); // evitare evento di reload
    console.log(email, password);
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    const body = {
      email: email,
      password: password,
    };
    
    GetPost(body, url, "post");
  };

  return (
    <div className="logInComponent">
      {/*  <img src={logo} alt="flixflow logo" /> */}

      <form className="formWrapperlogIn" onSubmit={handleSubmit}>
        <input
          className="input div1"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //Elemento in ascolto
        />

        <input
          className="input div2"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //Elemento in ascolto
        />

        <input className="inputSend div3" type="submit" placeholder="SigIn"/>
      </form>
    </div>
  );
};

export default LogInForm;
