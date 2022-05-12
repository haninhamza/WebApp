import "./newMailBox.css";
import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";



const initialState = {

    raspIPaddress:"",
  
    activity:"",
    };
  


const NewMailBox = () => {
    const [state, setState] = useState(initialState);

    const{raspIPaddress, activity } = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:5001/api/get/${id}`)
        .then((resp)=> setState({...resp.data[0]}))
      }, [id]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if(!raspIPaddress || !activity ){
          toast.error("Please provide value into each input field");
        } else {
          if(!id) {
            axios
            .post("http://localhost:5001/api/post",{
            raspIPaddress,
            
            activity,
            }).then(() => {
            setState({raspIPaddress:"", activity:""});
          }).catch((err) => toast.error(err.response.data));
          toast.success("MailBox Added successfully");
          } 
          else{
            axios
            .put(`http://localhost:5001/api/update/${id}`,{
                raspIPaddress,
                
                activity,
            }).then(() => {
              setState({raspIPaddress:"",  activity:""});
            }).catch((err) => toast.error(err.response.data));
            toast.success("MailBox Updated successfully");
          }
         
          setTimeout(() =>  history.push("/"),500);
        }
      };
      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value});
      };
      
 

  return (
    
    <div className="newMailBox" style={{marginTop: "100px"}}>
      
      <form style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "400px",
      alignContent: "center"
    }}
    onSubmit={handleSubmit}
    >
        
        <label htmlFor="raspIPaddress">IP ADDRESS</label>
     <input className="text-input"
     type="text"
     id="raspIPaddress"
     name="raspIPaddress"
     placeholder="Raspberry IP Address"
     value={raspIPaddress || "" }
     onChange={handleInputChange}
     />     
     
      <label htmlFor="activity">Activity</label>
      <br/>
      <select value={ activity || "" } onChange={handleInputChange} name="activity" id="activity-select" className="activity-select">
    <option value="">--Please choose an option-- </option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
     </select>
       
     <input type="submit" value={id ? "Update" : "Save" }/>
     <Link to="/">
       <input type="button" value="Go Back"/>
     </Link>
     </form>
     </div>
    );
};
 
export default NewMailBox; 
         