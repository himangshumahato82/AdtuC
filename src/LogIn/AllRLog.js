import { Route, Routes } from "react-router-dom";
import "../App.css"
import Register from "../pages/Register-User";
import Navbar from "../component/Navbar";

import Login from "../pages/Login-User";
import Question from "../pages/Question"


function AllRLog() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}
export default AllRLog;