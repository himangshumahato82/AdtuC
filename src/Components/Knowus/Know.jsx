import React from 'react';
import "./Know.css"
function Know(props) {
    return (
        <div className='know'>
            <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
           <div>
             <div>
               <img src="data:image/png;base64,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" alt="" />
               <h3>Additional Registrar</h3>
                <p>(Administration)</p>
                <h1>Ashim Barman</h1>
                 <p>ar@adtu.in</p>

             </div>
            </div>
        </div>
    );
}

export default Know;