import React, { useState} from "react";
import PropTypes from 'prop-types';
import './Login.css';
import KeyIcon from '@mui/icons-material/Key';

import CheckButton from "react-validation/build/button";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import Topbar from "../components/topbar/Topbar";
import Axios from "axios";



/*const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};*/

async function loginUser(credentials) {
     
      return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   
  }
   
  
   

export default function Login ({ setToken })  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   // const [loginStatus, setLoginStatus] = useState("");
   
    //Axios.defaults.withCredentials = true;

    
    
  
    /*const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
    
        
    };*/
 
   /* useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setLoginStatus(response.data.user[0].username);
        }
      });
    }, []);
*/
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password,
      });
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
    <Form className='login-form' onSubmit={handleSubmit}  >
      <label className='label-login'>
        <p>Username</p>
        <Input className='Username-login' type="text"   onChange={(e) => {
            setUsername(e.target.value);
          }}/>
      </label>
      <br></br>
      <label className='label-login'>
        <p>Password</p>
        <Input className='password-login' type="password"    onChange={(e) => {
            setPassword(e.target.value);
          }} />
      </label>
      
        <button className='boutton-login' >
       
               <span className="spinner-border spinner-border-sm"></span>
              
              <span>SIGN IN</span>
            </button>
      
           
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                
              </div>
            </div>
          
          <CheckButton style={{ display: "none" }}  />
         
        </Form>

   
    </div>
    </div>  
    </body>
  );

        }  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

