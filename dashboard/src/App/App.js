import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./App.css";
import Home from "../pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../pages/home/userList/UserList";
import NewUser from "../pages/home/newUser/NewUser";
import MailboxList from "../pages/mailboxList/MailboxList";
import NewMailBox from "../pages/NewMailBox/NewMailBox";
import Login from '../Login/Login';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ViewUser from "../pages/home/ViewUser/ViewUser";
import ViewMailbox from "../pages/ViewMailbox/ViewMailbox";
import Register from "../components/Register/Register";
import Navbar from "../components/Navbar/Navbar";




function App() {
 
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    
    
    <Router>
     <Navbar />
   <div className="container">
   <Sidebar />

   <ToastContainer position="top-center"/>

     <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
     
        
          <Route path="/users" >

         <UserList/>
         </Route>
          
          <Route path="/update/:id">
          <NewUser/>
          </Route> 
          
          <Route path="/newUser" >
          <NewUser/>
          </Route>
           
          <Route path="/viewUser/:id" >
          <ViewUser/>
          </Route>
           
          <Route path="/mailbox">
          <MailboxList/>
          </Route> 
           
          <Route path="/updatemailbox/:id" >
          <NewMailBox/>
          </Route>
           
          <Route path="/newMailBox" >
          <NewMailBox/>
          </Route>
            
          <Route path="/viewMailbox/:id">
          <ViewMailbox/>
          </Route>
          <Route path="/Register">
          <Register/>
          </Route>
    

        </Switch>
        
        </div>
        </Router>
   
      

        
        
      
   
   
  );
};

export default App;