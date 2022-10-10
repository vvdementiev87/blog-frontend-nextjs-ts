import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";

const Home: NextPage = () => {
  const { data } = useQuery(["authData"]);

  const router = useRouter();

  useEffect(() => {
    if (!data?.data?.token) {
      router.push("/login");
    }
  }, [data?.data?.token]);

  return (
    <div className={styles.wrapper}>
      <HeaderComponent pagename="Main Page" />
      <FooterComponent />
    </div>
  );
};

export default Home;
