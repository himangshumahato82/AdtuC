import React from "react";
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import FIND_COURSE from "../services/course-api";
import { Route, Routes} from "react-router-dom";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contacts/Contact";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Profile/Profile";
import Know from "../Components/Knowus/Know";
import Assignment from "../Components/Assignment/Assignment";
import Payment from "../Components/Payment/Payment";
import Payonline from "../Components/PayOnline/Payonline";
import Notice from "../Components/Notice/Notice";
import Application from "../Components/Application/Application";


function AllRoutes() {
  const { setProfile } = useContext(profileContext);
  const token = localStorage.getItem("TALENT_BOX_TOKEN");
  console.log(token);

  const redirect = useNavigate();
  const getUser = async () => {
    const result = await USER_AUTH(token);
    console.log(result);
    if (result.status === 200) {
      setProfile(result.data.user);
    } else {
      alert(result.response.data.message);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    } else {
     
      console.log("hello");
      redirect("/login");
    }
  }, [token]);

  // fetch Course data from mongo
  const fetCourseData = async () => {
    const result = await FIND_COURSE();
   
    if (result.status === 200) {
      
    } else {
      
    }
  };
  useEffect(() => {
    fetCourseData();
  }, []);

  
  return (
    <div >
      <Routes>
      <Route path="/question" element={<Home />}>
        <Route path="question" element={<Dashboard/>} />
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

export default AllRoutes;