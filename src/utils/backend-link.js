import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8000/`,
  //process.env.REACT_APP_SERVER_PORT
  //https://opennote-b0eb7f2ec0bf.herokuapp.com/
  //http://localhost:8000/
  headers: {
    "Content-type": "application/json",
  },
  timeout: 20000,
  withCredentials: true,
});
