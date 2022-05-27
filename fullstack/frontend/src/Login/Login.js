import React, { useState} from "react";
import PropTypes from 'prop-types';
import './Login.css';
import KeyIcon from '@mui/icons-material/Key';
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Topbar from "../components/topbar/Topbar";
import axiox from "axios";
import {useHistory} from "react-router-dom";



export default function Login ({ setToken })  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

async function loginUser() {
  axiox
      .post("http:/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        history.push("/");
      })
      .catch((error) => setError(error.response.data.message));
return fetch('http://localhost:8080/login', {

method: 'POST',

headers: {

'Content-Type': 'application/json'

},

body: JSON.stringify()

})

.then(data => data.json())

}







const handleSubmit = async e => {

e.preventDefault();

const token = await loginUser({
  

email,

password,
})


setToken(token);

}




return(

<body className='body'>

<div>

<Topbar/>

</div>

<div className="container-login">

<div className="login-wrapper">

<div class="login-key">

<KeyIcon/>

</div>

<div class="login-title">

ADMIN PANEL </div>

<h1 className='little-title'>Please Log In</h1>

<Form className='login-form' onSubmit={handleSubmit}  >

<label className='label-login'>

<p>Email</p>

<Input className='Username-login' type="email"   onChange={(e) => {

setEmail(e.target.value);

}} required/>

</label>

<br></br>

<label className='label-login'>

<p>Password</p>

<Input className='password-login' type="password"    onChange={(e) => {

setPassword(e.target.value);

}} required />

</label>

<button className='boutton-login' >

<span className="spinner-border spinner-border-sm"></span>

<span>SIGN IN</span>

</button>

<div className="form-group">

<div className="alert alert-danger" role="alert">

</div>

</div>

<CheckButton style={{ display: "none" }}  />

</Form>

</div>

</div>

</body>

);

}

Login.propTypes = {

setToken: PropTypes.func.isRequired

}
