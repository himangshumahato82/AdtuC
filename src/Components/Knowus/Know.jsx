import React from 'react';
import "./Know.css"
function Know(props) {

    const professor=[
      {
       img:"https://www.pulsetoday.co.uk/wp-content/uploads/c_files/web/s/f/o/Stephen-Field-scaled-768x512.jpg",
       name:"Steve Field",
       destiny:"NHS general practice",

      },
      {
        img:"https://content.presspage.com/uploads/1369/2thumbnail-rob72of22-381370.jpg?10000",
        name:"Rob Field",
        destiny:"Director for Manchester Institute of Biotechnology",
 
       },
        {
        img:"https://imgix.ranker.com/node_img/1545/30897660/original/abhijit-banerjee-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
        name:"Abhijit Banerjee",
        destiny:"the Ford Foundation International Professor of Economics at MIT.",
 
       }
      ,
      {
        img:"https://imgix.ranker.com/node_img/20/392413/original/abraham-verghese-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
        name:"Abraham Verghese",
        destiny:"Senior Associate Chair of the Department of Internal Medicine",
 
       },
       {
        img:"https://imgix.ranker.com/node_img/23/445946/original/amartya-sen-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
        name:"Amartya Sen",
        destiny:"An Indian economist and philosopher,",
 
       },
       {
         img:"https://imgix.ranker.com/user_node_img/1554/31073154/original/arvind-panagariya-politicians-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
         name:"Arvind Panagariya",
         destiny:"An Indian-American economist and a professor of economics at Columbia University",
  
        },
         {
         img:"https://imgix.ranker.com/user_node_img/26/501393/original/ashok-jhunjhunwala-all-people-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
         name:"Ashok Jhunjhunwala",
         destiny:"Ashok Jhunjhunwala is a professor in the Department of Electrical Engineering, Indian Institute of Technology Madras at Chennai",
  
        }
       ,
       {
         img:"https://imgix.ranker.com/node_img/26/517806/original/avinash-dixit-writers-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150",
         name:" Avinash Dixit",
         destiny:"An Indian-American economist",
  
        },
    ]






    return (
        <div className='know'>
            <div>
            {professor.map((el)=>{
            return(
              <div className='map-div'>
               <img src={el.img} alt="" />
               <h3>{el.name}</h3>
                <p>{el.destiny}</p>
              
             </div>
            )
            })}

             
            </div>
          
            </div>
        
    );
}

export default Know;