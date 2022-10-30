import axios from "axios";

const API_URL = "https://devavi.ru/http.php/";
const TOKEN = "Bearer ";

export interface IPostData {
  success: boolean;
  data?: {
    posts?: [];
  };
  reason?: string;
}

export const PostsSevice = {
  async showPosts() {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios.defaults.withCredentials = false;
    return await axios
      .get(API_URL + "posts/show")
      .then((res) => res.data)
      .catch((res) => res.data);
  },
};
