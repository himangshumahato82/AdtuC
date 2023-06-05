import React from "react";

import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Know from "./Components/Knowus/Know";
import Assignment from "./Components/Assignment/Assignment";
import Payment from "./Components/Payment/Payment";
import Payonline from "./Components/PayOnline/Payonline";
import Notice from "./Components/Notice/Notice";
import Application from "./Components/Application/Application";
import Log from "./Log";

function App() {

  return (
    <div className="App">
  
     <Log/>
     
      <Routes>
      <Route path="/" element={<Home />}>
      
 
        <Route path="/" element={<Dashboard/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="know" element={<Know/>} />
        <Route path="assignment" element={<Assignment/>} />
        <Route path="payment" element={<Payment/>} />
        <Route path="payonline" element={<Payonline/>} />
        <Route path="notice" element={<Notice/>} />
        <Route path="application" element={<Application/>} />
       </Route>
      </Routes>
    </div>
  );
}

export default App;