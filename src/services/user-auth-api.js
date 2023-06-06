import axios from "axios";
// const URL = "https://skygoal-backed-data.up.railway.app/api/v1";
// const URL = "http://localhost:8050/api/v1";
const URL = "https://adtub-production.up.railway.app/api/v1"
const USER_AUTH = async (token) => {
  console.log(token);
  const config = {
    headers: {
      authorization: token,
    },
  };
  return axios
    .get(`${URL}/student`, config)
    .then((res) => res)
    .catch((error) => error);
};
export default USER_AUTH;
