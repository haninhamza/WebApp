import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import "./viewuser.css";

const ViewUser = () => {
  const[user, setUser] = useState({});

  const {id}= useParams();

  useEffect (() => {
    axios
    .get(`http://localhost:5000/api/get/${id}`)
    .then((resp)=> setUser({ ...resp.data[0]}));
 },[id]);
  return(
    <div className='viewuser' style={{marginTop: "150px"}}>
      
      
          <p className="userDisplayTitle">User Contact Details</p>
       
        <div className='userContainer'>
        <div className="userDisplay">
        <div className="userDisplayInfo">

          <strong>ID:</strong>
          <span className="userDisplayInfoTitle">{id}</span>
          <br/>
          <br/>
      </div>
      <div className="userDisplayInfo">
          <strong>Email:</strong>
          <span className="userDisplayInfoTitle">{user.mailboxip}</span>
          </div>
      <div className="userDisplayInfo">
          <strong>Name:</strong>
          <span className="userDisplayInfoTitle">{user.name}</span>
          <br/>
          </div>
          <div className="userDisplayInfo">
          <strong>Contact:</strong>
          <span className="userDisplayInfoTitle">{user.contact}</span>
          <br />
          <br />
          </div>
          <div className="userDisplayInfo">
          <strong>Address:</strong>
          <span className="userDisplayInfoTitle">{user.address}</span>
          <br />
          <br />
          </div>
          <div className="userDisplayInfo">
          <strong>Email:</strong>
          <span className="userDisplayInfoTitle">{user.email}</span>
          <br />
          <br />
         </div>
         
          </div>
          </div>
          <br />
          
          <Link to="/">
            <div className="button">Go Back</div>
          </Link>
        
     
      </div>
    
  );
};
export default ViewUser;

