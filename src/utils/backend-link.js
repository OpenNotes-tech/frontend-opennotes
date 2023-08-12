import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8000/`, //process.env.REACT_APP_SERVER_PORT,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
