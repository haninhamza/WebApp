import "./userList.css";
import { Link } from "react-router-dom";
import  React, {useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import { DeleteOutline } from "@mui/icons-material";
import {Visibility} from '@mui/icons-material';
import {Edit} from '@mui/icons-material';

const UserList = () => {
   const [data, setData] = useState([]);

    const loadData = async () => {
      const response = await axios.get("http://localhost:5000/api/get");
      setData(response.data);
    };
    useEffect(() => {
      loadData();
    }, []);
    
  const deleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete this contact ?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Contact Deleted Successfully");
      setTimeout(() => loadData(), 500);//after 500ms
    }
  };
  return(
    <div className='user'>
    
    <Link to="/NewUser">
    <button className="btn-users">Add User</button>
    </Link>
    <div className="userDisplay">
       <table className="styled-table">
       
         <thead>
         
           <tr>
            <th style={{textAlign: "center"}} > ID </th>
            <th style={{textAlign: "center"}} > Name </th>
            <th style={{textAlign: "center"}} > Contact </th>
            <th style={{textAlign: "center"}}>Address</th>
            <th style={{textAlign: "center"}} > Email </th>
            <th style={{textAlign: "center"}} > Password </th>
           
            <th style={{textAlign: "center"}} > Action </th>
           </tr>
         </thead>
         
         <tbody>
         <br/>
         <br/>
           {data.map((item, index) => {
             return (
               <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{ item.address}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                
                <td>
                  <Link to={`/update/${item.id}`}>
                  <Edit className="edit"/>
                  </Link>
                  <DeleteOutline className="delete" onClick={() => deleteContact(item.id)} />
                  <Link to={`/viewUser/${item.id}`}>
                  <Visibility className="view" />
                  </Link>
                </td>
                </tr>
             );
           }
           )};
         </tbody>
       </table>
       
    </div>
    
</div>
  );
};
export default UserList;