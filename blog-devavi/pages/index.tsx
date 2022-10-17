import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import { IAuthData } from "../app/service/auth.service";

const Home: NextPage = () => {
  const { data } = useQuery<IAuthData, Error>(["authData"]);

  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />
      <BlogInfo
        id="1cc0bd41-b65e-4cd4-a8bf-f28bde18c53b"
        category="Interior"
        title="How to Get Started With Interior Design"
        date={new Date(2022, 9, 13)}
        text="dfgdfgdfgfd"
      />
      <FooterComponent />
    </div>
  );
};

export default Home;
