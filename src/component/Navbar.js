import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { profileContext } from "../context/myContext";

const Navbar = () => {
  const { profile, setProfile } = useContext(profileContext);
  console.log(profile)
  const URL = "https://skygoal-backed-data.up.railway.app";
  const redirect = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("TALENT_BOX_TOKEN");
    setProfile({});
    redirect("/");
  };
  const Question=()=>{
    alert("Without Login you can't view question")
    if(Object.keys(profile).length > 0){
     
      redirect("/question")
      
    }else{
      redirect("/register")
      
    }
  }
  
  return (
    <div style={{display:"flex"}}>
    <div style={{width:"21.45%",backgroundColor:"black",height:"110px"}}>
    <img style={{width:"100%"}}  src="https://adtu.in/assets/images/logo-white.png" alt="" />
    </div>
    
    <div id="nav-bar" style={{width:"80%",height:"110px"}}>
    
       
      
      {Object.keys(profile).length > 0 ? (
        <div className="profile" >
          <span>{profile.name}</span>
          <img src={`${URL}/upload/${profile.imageUrl}`} alt="" />
          <Button
            className="logout-btn"
            buttonText="LOGOUT"
            onClick={logoutUser}
          />
        </div>
      ) : (
        <div style={{display:"flex",justifyContent:"space-around" }}>
         
          <button onClick={() => redirect("/register")} style={{marginLeft:"20px",padding:"10px"}}>SIGNIN</button>
        </div>
      )}
    </div>
    </div>
  );
};
export default Navbar;
