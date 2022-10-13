import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { BlogInfo } from "./components/BlogInfo/BlogInfo";
import { text } from "stream/consumers";

const Home: NextPage = () => {
  const { data } = useQuery(["authData"]);

  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />
      <BlogInfo
        category="Interior"
        title="How to Get Started With Interior Design"
        date={new Date(2022, 9, 13)}
        text="Nulla et commodo turpis. Etiam hendrerit ornare pharetra. Cras eleifend purus vitae lorem venenatis bibendum. Sed commodo mi quis augue finibus, ut feugiat erat aliquam."
      />
      <FooterComponent />
    </div>
  );
};

export default Home;
