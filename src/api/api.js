import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-trials.x5.com.au/api/",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
