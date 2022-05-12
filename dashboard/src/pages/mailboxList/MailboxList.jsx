import "./mailboxList.css";
import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { DeleteOutline } from "@mui/icons-material";
import {Visibility} from '@mui/icons-material';
import {Edit} from '@mui/icons-material';

const MailboxList = () => {
  const [products, setProduct] = useState([]);


  const getProducts = async () => {
    const response = await axios.get('http://localhost:5001/api/get');
    setProduct(response.data);
}
  useEffect(() => {
      getProducts();
  }, []);

  
const deleteProduct = async (id) => {
    if (
        window.confirm("Are you sure that you wanted to delete this MailBox ?")) {
  axios.delete(`http://localhost:5001/api/remove/${id}`);
  toast.success("MailBox Deleted Successfully");
  setTimeout(() => getProducts(), 500);//after 500ms
}
};

  return (
    <div className="mailBoxList">

    <Link to="/NewMailBox/">
    <button className="btn btn-mailbox">Add New</button>
    </Link>
     <div className="userDisplay">
     <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>IP Address</th>
                        
                        <th style={{textAlign: "center"}}>Activity</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return(
                            <tr key={ product.id }>
                            <th scope="row">{index+1}</th>
                            <td>{ product.raspIPaddress}</td>
                           
                            <td>{ product.activity}</td>

                            <td>
                           
                                <Link to={`/updatemailbox/${product.id}`} >
                                <Edit className="edit"/>
                                </Link>
                                
                                
                                <DeleteOutline className="delete" onClick={() => deleteProduct(product.id)} />
                                
                                <Link to={`/viewMailbox/${product.id}`}>
                                <Visibility className="view" />
                                </Link>
                                
                               
                            </td>
                        </tr>
                        );
                    }
                        
                    )} ;
                     
                </tbody>
            </table>
        </div>
        </div>
  );
};

export default MailboxList;
      
      
      
        
  