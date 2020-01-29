import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
import logo from "./logo.png";

const JumboTron = () => {
return (
<Jumbotron className="jumboStyle">
    <img
        src={logo}
        width="300"
        height="auto"
        className="d-inline-block align-top"
        alt="logo"
      />
</Jumbotron>
);
}

export default JumboTron;