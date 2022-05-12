import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import "./viewmailbox.css";

const ViewMailbox = () => {
    const[mailbox, setMailbox] = useState({});
  
    const {id}= useParams();
  
    useEffect (() => {
      axios
      .get(`http://localhost:5001/api/get/${id}`)
      .then((resp)=> setMailbox({ ...resp.data[0]}));
   },[id]);
    return(
      <div className='viewmailbox' style={{marginTop: "150px"}}>
        
        
            <p className="userDisplayTitle">Smart MailBox Details</p>
         
          <div className='userContainer'>
          <div className="userDisplay">
          <div className="userDisplayInfo">
            <strong>ID:</strong>
            <span className="userDisplayInfoTitle">{id}</span>
            <br/>
            <br/>
        </div>
        <div className="userDisplayInfo">
            <strong>Raspberry IP address:</strong>
            <span className="userDisplayInfoTitle">{mailbox.raspIPaddress}</span>
            <br/>
            <br/>
            <br/>
            </div>
           
            <div className="userDisplayInfo">
            <strong>Activity:</strong>
            <span className="userDisplayInfoTitle">{mailbox.activity}</span>
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
  export default ViewMailbox;