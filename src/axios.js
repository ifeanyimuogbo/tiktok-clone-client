import axios from "axios";

const instance = axios.create({
  baseUrl: "https://polar-spire-48105.herokuapp.com",
});
export default instance;
