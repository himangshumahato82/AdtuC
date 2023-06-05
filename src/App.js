import React from "react";
import AllRLog from "./LogIn/AllRLog";
import "./App.css";

import Navbar from "./component/Navbar";

import AllRoutes from "./AllRoute/AllRoutes"
function App() {

  return (
    <div className="App">
      <Navbar />
       <AllRLog/>
       <AllRoutes/>
    </div>
  );
  
}

export default App;