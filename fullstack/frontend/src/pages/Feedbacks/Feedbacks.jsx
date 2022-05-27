import "./feedbacks.css";
import React,{ useState, useEffect } from "react";
import axios from "axios";



const FeedbacksList = () => {
  const [feedbacks, setFeedback] = useState([]);


  const getFeedbacks = async () => {
    const response = await axios.get('http://localhost:5004/api/get');
    setFeedback(response.data);
}
  useEffect(() => {
     getFeedbacks();
  }, []);

  


  return (
    <div className="Feedbacks">
     <div className="userDisplay">
     <table className="styled-table">
                <thead>
                    <tr>
                    <th style={{textAlign: "center"}}>ID</th>
                    <th style={{textAlign: "center"}}>Object</th>
                    <th style={{textAlign: "center"}}>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                <br/>
         <br/>
                    {feedbacks.map((item, index) => {
                        return(
                            <tr key={item.id}>
                           
                            <th scope="row">{index+1}</th>
                            <td>{ item.objectcol}</td>
                            <td>{ item.feedbackscol}</td>
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

export default FeedbacksList;
      
      
      
        
  