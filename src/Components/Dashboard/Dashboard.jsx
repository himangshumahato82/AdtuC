import React from 'react';
import "./Dashboard.css";
import timelogo from "../logo/time.png"
import smslogo from "../logo/smslogo.png"
import notes from "../logo/notesl.png"
import rate from "../logo/ratel.png"
function Dashboard(props) {


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
        {
          "source": {
            "id": null,
            "name": "UPI.com"
          },
          "author": "Simon Druker",
          "title": "Weather delay moves SpaceX resupply mission to same day as Starlink launch - UPI News",
          "description": "Weather in Florida has delayed the launch of the SpaceX Dragon cargo mission, which is now slated to lift off Sunday, the same day the company also plans to send a new batch of Starlink satellites into orbit.",
          "url": "https://www.upi.com",
          "urlToImage": "https://cdnph.upi.com/sv/ph/og/upi/2021685817893/2023/1/e5ff3d756ddedd9099b6a5cbdd516591/v1.5/Weather-delay-moves-SpaceX-resupply-mission-to-same-day-as-Starlink-launch.jpg",
          "publishedAt": "2023-06-03T19:40:54Z",
          "content": "June 3 (UPI) -- Weather in Florida has delayed the launch of the SpaceX Dragon cargo mission, which is now slated to lift off Sunday, the same day the company also plans to send a new batch of Starli… [+1798 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "AP",
          "title": "US president Joe Biden signs bill averting debt default - Hindustan Times",
          "description": "The White House announced the signing in an emailed statement in which Biden thanked congressional leaders for their partnership. | World News",
          "url": "https://www.hindustantimes.com/world-news/us-debt-ceiling-crisis-bill-joe-biden-white-house-101685815763215.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/03/1600x900/AP06-03-2023-000061A-0_1685815788011_1685815908591.jpg",
          "publishedAt": "2023-06-03T18:17:33Z",
          "content": "With just two days to spare, President Joe Biden signed legislation on Saturday that lifts the nations debt ceiling, averting an unprecedented default on the federal governments debt.\r\nPresident Joe … [+4815 chars]"
        }

    ]



    return (
        <div >
           <div  className='first-row' >
          
           <div className='student'>
           <div className='img-s'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKNFoKUmGW_iMp7ev7WAn_dO-fuXza84XoVmaBU5fdNioD7_5MXxR7aBzj7YNt1fzacs&usqp=CAU" alt="" />
           </div>
           <div>
           <h1>Student</h1>
           <h1>37</h1>
           </div>
           </div>

           <div className='facality'>
           <div className='img-s'>
            <img src="data:image/png;base64,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" alt="" />
           </div>
           <div>
           <h1>Faculity</h1>
           <h1>1</h1>
           </div>
           </div>

           <div className='course'>
           <div className='img-c'>
            <img src="data:image/png;base64,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" alt="" />
           </div>
           <div>
           <h1>Courses</h1>
           <h1>103</h1>
           </div>
           </div>
           </div>


           <div className='second-div'>
            <div className='stu-g'>
              <div className='stu-child'>
               <img src={smslogo} alt="" />
               <p>
               Student Governace Connect Click
               </p>
               </div>
            </div>
            <div className='stu-gt'>
            <div className='stu-child'>
            <img src={timelogo} alt="" />
               <p>
              Time table
               </p>
            </div>
          </div>
          <div className='stu-gn'>
            <div className='stu-child'>
            <img src={notes} alt="" />
               <p>
           Notes
               </p>
            </div>
          </div>
          <div className='stu-gr'>
          <div className='stu-child'>
          <img src={rate} alt="" />
             <p>
            Rate Your Class to update your Attendance
             </p>
          </div>
        </div>
           
           </div>
           <div className='news'>
              <div style={{backgroundColor:'teal',padding:"3px"}}>
              <h1>Google News</h1>
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
    );
}

export default Dashboard;