import React from 'react'
import "./navbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
             <span className='logo'>Tunisian Post</span>
             </div>
        <div className="topRight">
           <div className='navbarIconContainer'>
          <NotificationsNone/>
           <span className="navIconBadge">2</span>
           </div>
           <div className='navbarIconContainer'>
          <Language/>
           
           </div>
           <div className='navbarIconContainer'>
          <Settings/>
           </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5XcL1mW58l0hpMsvLwB7Rc5ueunrv4Zq0g&usqp=CAU" alt="" className='topAvatar'/>
           </div>    
      </div> 
       </div>
      
  )
  ;
}