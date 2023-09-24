import axios from "axios";
// import Cookies from "js-cookie";

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_PORT,
  //process.env.REACT_APP_SERVER_PORT
  //https://opennote-b0eb7f2ec0bf.herokuapp.com/
  //http://localhost:8000/
  headers: {
    "Content-type": "application/json",
    // Authorization: Cookies.get("openToken")
    //   ? `Bearer ${Cookies.get("openToken")}`
    //   : null,
  },
  timeout: 20000,
  withCredentials: true,
});
