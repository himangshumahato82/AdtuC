import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import USER_AUTH from "../services/user-auth-api";
import { profileContext } from "../context/myContext";
import FIND_COURSE from "../services/course-api";


const Question = () => {
  
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
    
    </div>
  );
};
export default Question;
