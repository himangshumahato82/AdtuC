import React from 'react';
import "./Atten.css"
function Atten(props) {

    function generateRandomPercentageAbove75() {
        var randomPercentage = Math.random() * 25 + 75;
        return randomPercentage.toFixed(2);
      }
      
      var randomPercentage = generateRandomPercentageAbove75();
      


    return (
        <div style={{marginBottom:"50px"}}>
         <div className='cur'>
            <p>Current Semester attendance</p>
            </div>
               <div className='att'>
               <p>Attendence</p>
                 <h1>{randomPercentage}%</h1>
               </div>
             <h4> <span>Alert:</span> Minimum percentage to appear End semester examination is 75%. If you are not satisfied with thish contact Student Helpdesk centre immediately</h4>
        </div>
    );
}

export default Atten;