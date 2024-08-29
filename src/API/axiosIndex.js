import axios from "axios";
const instance = axios.create({
  BaseURL: "http://157.230.58.153",
});

export default instance;
