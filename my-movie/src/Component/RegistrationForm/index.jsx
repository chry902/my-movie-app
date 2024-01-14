/* eslint-disable react/prop-types */
import "./style.scss";
import { useEffect, useState } from "react";

const RegistrationForm = ({ GetPost }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Avatar, setAvatar] = useState("");
  const [formActive, setFormActive] = useState(false);

  // funzione controllopass
  const isLowercase = /[a-z]/.test(Password);
  const isNumber = /\d/.test(Password);

  const PassControll = () => {
    if (
      Password.length >= 8 &&
      Password.charAt(0) === Password.charAt(0).toUpperCase() &&
      isLowercase &&
      isNumber === true
    ) {
      console.log("passControll ", true, Password);
      return setFormActive(true);
    } else {
      console.log("passControll ", false, Password);
      return setFormActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://api.escuelajs.co/api/v1/users/";
    // crea body con i dati della registrazione
    const body = {
      name: Name,
      email: Email,
      password: Password,
      avatar: Avatar,
    };

    GetPost(body, url, "postReg");
    // setName("");
    // setEmail("");
    // setPassword("");
    // setAvatar("");
  };

  useEffect(() => {
    PassControll();
    // eslint-disable-next-line
  }, [Password]);

  return (
    <div className="registrationComponent">
      <form className="formWrapperReg" onSubmit={handleSubmit}>
        <input
          className="input div1"
          type="email"
          value={Email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input div2"
          type="password"
          value={Password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input div3"
          type="text"
          value={Name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="inputavatar div4"
          type="text"
          value={Avatar}
          placeholder="URL Avatar"
          onChange={(e) => setAvatar(e.target.value)}
        />

        <input className="inputSend div5" type="submit" />
      </form>
      {!formActive ? (
        <p className="errorMess">
          La password deve contenere minimo `8` caratteri, la
          prima lettera maiuscola `A`, almeno un carattere minuscolo `a` ed un
          numero `1`
        </p>
      ) :  <p className="passCorrect">
          Ra password corrispendo ai requisiti richiesti
        </p>}
    </div>
  );
};

export default RegistrationForm;
