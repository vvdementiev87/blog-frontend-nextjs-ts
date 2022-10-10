import axios, { AxiosResponse } from "axios";

const API_URL = "https://devavi.ru/index.php/";

export const AuthSevice = {
  async login(username: string, password: string) {
    const json = JSON.stringify({ username: username, password: password });
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios.defaults.withCredentials = false;
    return await axios
      .post(API_URL + "login", json)
      .then((res) => res.data)
      .catch((res) => res.data);
  },
};
