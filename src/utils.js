import axios from "axios";

const com = {};

com.root = "https://e5ff2e65e437.ngrok.io";

com.setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default com;
