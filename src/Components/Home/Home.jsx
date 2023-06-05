import React from 'react';
import "./Home.css";
import Atten from "../Attendance/Atten";
import {Link,Outlet} from "react-router-dom";
function Home(props) {
var links=[
    {
     path:"dashboard",
     title:"Dashboard",   
    },
    {
        path:"profile",
        title:"My Profile",  

    },
    {
      path:"know",
      title:"Know Us",  

  },
  {
    path:"notice",
    title:"Notice/News",  

},
{
  path:"application",
  title:"Application",  

},
{
  path:"assignment",
  title:"Assignment",  

},
{
  path:"payment",
  title:"Payment Details",  

},
{
  path:"payonline",
  title:"Pay Online",  

},
];

    return (

      <div className='main-div'>
       
      
        <div className="categoryContainer">
        <div className="linkContainer">
        
          {links.map((link, index) => (
            <h3 >
            <Link style={{textDecoration:"none",color:"white"}} to={link.path}>{link.title}</Link>
            </h3>
          ))}
        </div>
        
        <div>
          <Outlet />
        </div>
      </div>
      <div className='attendance'>
          <Atten/>
      </div>
      
      </div>
    );
}

export default Home;