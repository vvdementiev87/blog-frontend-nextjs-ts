import axios, { AxiosResponse } from "axios";

const API_URL = "https://devavi.ru/index.php/users/show?username=";

export const UserSevice = {
  async getUserByUsername(username: string) {
    return await axios<AxiosResponse>({
      method: "GET",
      url: API_URL + username,
      withCredentials: false,
    })
      .then((res) => res.data)
      .catch((res) => res.data);
  },
};
