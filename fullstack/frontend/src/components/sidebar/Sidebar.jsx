import React from 'react'
import "./sidebar.css"
 import{

  LineStyle,
  PermIdentity,
  MarkunreadMailbox,
  Feedback,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
     <div className="SidebarWrapper">
       <div className="SidebarMenu">  
         <h3 className="SidebarTitle">Dashboard</h3>
         <br/>
         <ul className='sidebarList'>
         <Link to="/"  className='link'>
         <li className='sidebarListItem active '> 
            <LineStyle className='sidebarIcon'/>
           Home
            </li>
            </Link>
             </ul>
           </div>
           <br/>
        <div className="SidebarMenu">  
         <h3 className="SidebarTitle">Quick Menu</h3>
         <br/>
         <ul className='sidebarList'>
         <Link to="/users" className='link'>
         <li className='sidebarListItem  '> 
         <PermIdentity className="sidebarIcon" />
           Users 
            </li>
            </Link>
            <Link to="/mailbox"  className='link'>
            <br/>
            <li className='sidebarListItem'> 
            <MarkunreadMailbox className="sidebarIcon" />
                Smart mailboxes 
            </li>
            </Link>
            <br/>
            <Link to="/feedbacklist"  className='link'>
            <li className='sidebarListItem'> 
            <Feedback className="sidebarIcon" />
                Feedbacks
            </li>
            </Link>
          </ul>
           </div>
           </div>
           </div>
           );
}