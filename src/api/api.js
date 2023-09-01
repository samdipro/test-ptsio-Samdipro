import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-trials.x5.com.au/api/",
  // headers: {
  //   "x-secret-key": "secret",
  // },
});
