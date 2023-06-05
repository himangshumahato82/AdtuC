import React from 'react';
import { useState,useEffect } from 'react';
function Notice(props) {

    const [state,setState]=useState([])
    useEffect(()=>{
       
         // fetch(`https://fakestoreapi.com/users?limit=5&q=${search}`)
          fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3ff3b658f89b462494a8980d6b14c87f')
         .then((res)=> res.json())
         .then((data)=>{
           setState(data.articles)
         })
   
     
   },[])

console.log(state)





    return (
        <div>
        <div className='news'>
        <div style={{backgroundColor:'teal',padding:"3px"}}>
        <h1>Google News</h1>
        </div>
       <div>
         {state.map((el)=>{
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

export default Notice;