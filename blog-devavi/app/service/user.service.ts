import axios, { AxiosResponse } from "axios";

const API_URL = "https://devavi.ru/index.php/";

export const UserSevice = {
  async getUserByUsername(username: string) {
    return await axios<AxiosResponse>({
      method: "GET",
      url: API_URL + "users/show?username=" + username,
      withCredentials: false,
    })
      .then((res) => res.data)
      .catch((res) => res.data);
  },
};
