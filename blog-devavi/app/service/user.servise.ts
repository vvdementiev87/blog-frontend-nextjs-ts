import axios, { AxiosResponse } from "axios";

const API_URL = "https://devavi.ru/index.php/";
const TOKEN = "Bearer ";

export interface IUserData {
  success: boolean;
  data?: {
    uuid?: string;
  };
  reason?: string;
}

export const UserSevice = {
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
