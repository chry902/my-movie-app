import React from "react";
import { useState } from "react";

const LogInForm = ({ GetPost, setEmail, setPassword, email, password }) => {
  //funzione che passa ulr credenziali e info della chiamata e fa call func post per log in
  const handleSubmit = async (e) => {
    e.preventDefault(); // evitare evento di reload
    console.log(email, password);
    const url = "https://api.escuelajs.co/api/v1/auth/login";

    GetPost(url, "post");
  };
  return (
    <div className="logInComponent">
      <form className="formWrapper" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //Elemento in ascolto
        />

        <input
          className="input"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //Elemento in ascolto
        />

        <input className="inputSend" type="submit" />
      </form>
    </div>
  );
};

export default LogInForm;
