import React from 'react';
import "./Home.css";
import Atten from "../Attendance/Atten";
// import CollegeNotice from '../NoticeCol/CollegeNotice';
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

const  articles= [
  {
    "source": {
      "id": null,
      "name": "The Indian Express"
    },
    "author": "Sports Desk",
    "title": "PSG vs Clermont Highlights, Ligue 1: Lionel Messi’s last match for PSG ends in defeat as they go 2-3 down to Clermont - The Indian Express",
    "description": "PSG vs Clermont Foot Live Score: Lionel Messi and Sergio Ramos played their last match in PSG colours against Clermont.",
    "url": "https://indianexpress.com/article/sports/football/psg-vs-clermont-ligue-1-live-score-updates-streaming-lionel-messi-last-match-8644162/",
    "urlToImage": "https://images.indianexpress.com/2023/06/Messi-22.jpg",
    "publishedAt": "2023-06-03T21:04:00Z",
    "content": "Lionel Messi will play his last game for Paris St Germain against Clermont\r\nSaturday night in Paris, Lionel Messi will wear PSGs iconic Hechter stripes for one last time. The end was inevitable after… [+1045 chars]"
  },
  {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Sugandha Rawal",
      "title": "Not a love story: Splitsville hits Hollywood world hard - Hindustan Times",
      "description": "While many international celebrity couples have gone stronger this year, there are several other romances that couldn’t stand the test of time and have fallen apart. Here are some Hollywood couples who have parted ways recently | Hollywood",
      "url": "https://www.hindustantimes.com/entertainment/hollywood/celebrity-breakups-kevin-costner-reese-witherspoon-cher-more-split-with-their-partners-after-years-of-dating-101685816062223.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/03/1600x900/Recently--Yellowstone-star-Kevin-Costner-s-wife-fi_1685816057990.jpg",
      "publishedAt": "2023-06-03T18:14:21Z",
      "content": "Relationships go through thick and thin. Some stand the test of time, while a few perish. We look at some celebrity couples whose love story didnt meet with a happy ending. \r\nRecently, Yellowstone st… [+4283 chars]"
    },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "India's worst train crash in decades kills at least 288 - Reuters India",
    "description": "At least 288 people have died in India's worst rail crash in over two decades, officials said on Saturday, after a passenger train went off the tracks and hit another one in an accident a preliminary report blamed on signal failure.",
    "url": "https://www.reuters.com/world/india/indian-train-crash-death-toll-jumps-233-900-injured-2023-06-03/",
    "urlToImage": "https://www.reuters.com/resizer/CmuQ9DbJWBJVvZNtModnyYfs7ag=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EKRHOU6SSBKUXEYT2WHQ2VFXEE.jpg",
    "publishedAt": "2023-06-03T20:17:00Z",
    "content": "BAHANAGA, India, June 3 (Reuters) - At least 288 people have died in India's worst rail crash in over two decades, officials said on Saturday, after a passenger train went off the tracks and hit anot… [+4868 chars]"
  },
  

]

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
          <div className='news' style={{padding:"10px",paddingBottom:"53%",boxShadow:"none",marginLeft:"0px"}}>
          <div style={{backgroundColor:'#673ab7',padding:"20px"}}>
          <h1>Notice/News</h1>
          </div>
         <div>
           {articles.map((el)=>{
          return(
            <div className='news-div'>
            
            <div>
            <img src={el.urlToImage} alt="" />
            </div>
          <div className='title'>
          <p>{el.title}</p>
          <p>{el.publishedAt}</p>
          </div>
          </div>
          )
            })}

          
           </div>
       </div>
      </div>
      
      </div>
    );
}

export default Home;