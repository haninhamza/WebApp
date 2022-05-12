import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify";
import "./newUser.css";


const initialState = {

  name:"",
  address:"",
  email:"",
  contact:"",
};

const NewUser = () => {
  const [state, setState] = useState(initialState);


  const{name, address, email, contact} = state;

  const history = useHistory();

  const {id} = useParams();

 useEffect(() => {
   axios
   .get(`http://localhost:5000/api/get/${id}`)
   .then((resp)=> setState({...resp.data[0]}));
 }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !address || !email || !contact){
      toast.error("Please provide value into each input field");
    } else {
      if(!id) {
        axios
        .post("http://localhost:5000/api/post",{
        name, 
        address,
        email,
        contact,
      }).then(() => {
        setState({name:"", address:"", email:"", contact: ""});
      }).catch((err) => toast.error(err.response.data));
      toast.success("User Added successfully");
      } 
      else{
        axios
        .put(`http://localhost:5000/api/update/${id}`,{
          name,
          address, 
          email,
          contact,
        }).then(() => {
          setState({name:"", email:"", contact: "", address:""});
        }).catch((err) => toast.error(err.response.data));
        toast.success("User Updated successfully");
      }
     
      setTimeout(() =>  history.push("/"),500);
    }
  };
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value});
  };

 
  
  return(
    
    <div className='user' style={{marginTop: "100px"}}>
    <form style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "400px",
      alignContent: "center"
    }}
    onSubmit={handleSubmit}
    >

     <label htmlFor="name">Name</label>
     <input 
     type="text"
     id="name"
     name="name"
     placeholder="Your full name"
     value={name || "" }
     onChange={handleInputChange}
     />

     <label htmlFor="address">Address</label>
     <input className="text-input" type="text"
     id="address"
     name="address"
     placeholder="Your address "
     value={address || ""}
     onChange={handleInputChange}
     />


<label htmlFor="email">Email</label>
     <input type="email" id="email" name="email" placeholder="Your Email address" value={email || ""} onChange={handleInputChange}
     />

<label htmlFor="contact">Contact</label>
     <input type="number" className='input-contact'
     id="contact"
     name="contact"
     placeholder="Your contact number "
     value={contact || ""}
     onChange={handleInputChange}
     />
     <input type="submit" value={id ? "Update" : "Save" }/>
     <Link to="/">
       <input type="button" value="Go Back"/>
     </Link>
     </form>
     </div>
       

  );
};

export default NewUser;