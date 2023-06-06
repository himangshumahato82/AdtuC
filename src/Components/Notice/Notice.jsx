import React from 'react';
import { useState,useEffect } from 'react';
function Notice(props) {

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
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Indian Equity Markets To Extend Global Rally; OMCs To Be In Focus | OPENING BELL - moneycontrol",
      "description": "Indian equity markets poised for a gap up opening. Stocks that are expected to be in limelight include Oil Marketing Companies, Wipro, Zydus Lifespciences am...",
      "url": "https://www.youtube.com/watch?v=a2cAOGvCRdg",
      "urlToImage": "https://i.ytimg.com/vi/a2cAOGvCRdg/maxresdefault.jpg",
      "publishedAt": "2023-06-05T03:35:52Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Thehealthsite.com"
      },
      "author": "Satata Karmakar",
      "title": "Typhoid Cases Increasing In India: Alert Issued To States Over Sudden Outbreak | TheHealthSite.com - TheHealthSite",
      "description": "Take a quick look at the top 5 diseases that are expected to spread in India in the coming weeks. TheHealthSite.com",
      "url": "https://www.thehealthsite.com/news/alert-issued-in-india-over-top-5-diseases-ncdc-warns-against-sudden-outbreak-982754/",
      "urlToImage": "https://st1.thehealthsite.com/wp-content/uploads/2023/06/Typhoid.jpg",
      "publishedAt": "2023-06-05T03:33:00Z",
      "content": "Alert Issued In India Over Top 5 Diseases: NCDC Warns Against Sudden Outbreak\r\nTake a quick look at the top 5 diseases that are expected to spread in India in the coming weeks.\r\nWith covid cases sett… [+2032 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Alka Jain",
      "title": "How fintech is revolutionizing startup funding in India | Mint - Mint",
      "description": "India has recognized 92,683 startups since the launch of the Startup India initiative, according to government statistics. While venture capitalists are a preferred source of funding for many, some startups rely on fintech lending to bootstrap their companies.",
      "url": "https://www.livemint.com/companies/start-ups/how-fintech-is-revolutionizing-startup-funding-in-india-startup-news-11685929324911.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/05/600x338/startups_1681325714153_1685935800194.jpg",
      "publishedAt": "2023-06-05T03:31:37Z",
      "content": "The Department for Promotion of Industry and Internal Trade (DPIIT) has officially recognized 92,683 entities as startups as of February 28, 2023, since the launch of the Startup India initiative, ac… [+3636 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "How to live stream Apple’s WWDC 2023 keynote - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/article/technology/tech-news-technology/how-to-live-stream-apples-wwdc-2023-event-8645322/",
      "urlToImage": null,
      "publishedAt": "2023-06-05T03:30:52Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Watch: Dog Reacts To Thundering Sonic Boom As US Fighter Planes Fly Over House - NDTV",
      "description": "A sonic boom rattled US's Washington and Virginia on Monday after two F-16 fighter jets chased an \"unresponsive aircraft\" through the sky. As people took to social media to inquire about the strange noise, many residents also shared CCTV videos.",
      "url": "https://www.ndtv.com/world-news/watch-dog-reacts-to-thundering-sonic-boom-as-us-fighter-planes-fly-over-house-4094443",
      "urlToImage": "https://c.ndtvimg.com/2023-06/9dasass_dog-sonic-boom_625x300_05_June_23.jpg",
      "publishedAt": "2023-06-05T03:19:49Z",
      "content": "In the clip, Rocket, can be seen leisurely napping on a sofa when the loud boom is heard.\r\nA sonic boom rattled US's Washington and Virginia on Monday after two F-16 fighter jets chased an unresponsi… [+1608 chars]"
    },
   
]





    return (
        <div>
          {articles.length===0? <h1>Loading................</h1>:

        <div className='news'>
        <div style={{backgroundColor:'teal',padding:"20px"}}>
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
        <p style={{marginTop:"20px"}}>{el.title}</p>
        <p style={{marginTop:"20px"}}>{el.publishedAt}</p>
        </div>
        </div>
        )
          })}

        
         </div>
     </div>}
        </div>
    );
}

export default Notice;