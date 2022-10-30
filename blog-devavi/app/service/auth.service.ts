import axios, { AxiosResponse } from "axios";

const API_URL = "https://devavi.ru/http.php/";
const TOKEN = "Bearer ";

export interface IAuthData {
  success: boolean;
  data?: {
    token?: string;
    expiresOn?: {
      date: string;
      timezone_type: number;
      timezone: string;
    };
    uuid?: string;
    username?: string;
  };
  reason?: string;
}

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
  async logout(token: string) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios.defaults.headers.post["Authorization"] = TOKEN + token;
    axios.defaults.withCredentials = false;
    return await axios
      .post(API_URL + "logout")
      .then((res) => res.data)
      .catch((res) => res.data);
  },
  async createUser(
    username: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    const json = JSON.stringify({
      username: username,
      password: password,
      first_name: firstname,
      last_name: lastname,
    });
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios.defaults.withCredentials = false;
    return await axios
      .post(API_URL + "users/create", json)
      .then((res) => res.data)
      .catch((res) => res.data);
  },
};
