import React from 'react';
import { useState,useEffect } from 'react';
function CollegeNotice(props) {

    const [state,setState]=useState([])
    useEffect(()=>{
        const  handlechange= setTimeout(()=>{
         // fetch(`https://fakestoreapi.com/users?limit=5&q=${search}`)
          fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=3ff3b658f89b462494a8980d6b14c87f&pageSize=3`)
         .then((res)=> res.json())
         .then((data)=>{
           setState(data.articles)
         })
        },)
        return ()=>clearTimeout(handlechange)
     
   },[])

console.log(state)





    return (
        <div>
          {state.length===0? <h1>Loading................</h1>:

        <div className='news' style={{padding:"10px",paddingBottom:"50px"}}>
           <div style={{backgroundColor:'#673ab7',padding:"20px"}}>
          <h1>Notice/News</h1>
            </div>
          <div>
         {state.map((el)=>{
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

export default CollegeNotice;