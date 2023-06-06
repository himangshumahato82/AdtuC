import axios from "axios";
// const URL = "https://skygoal-backed-data.up.railway.app/api/v1";
 const URL = "https://adtub-production.up.railway.app/api/v1";
const FIND_COURSE = async () => {
  return axios
    .get(`${URL}/all-course`)
    .then((res) => res)
    .catch((er) => er);
};
export default FIND_COURSE;

