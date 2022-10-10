import styles from "../styles/Login.module.scss";
import type { NextPage } from "next";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { LoaderSpinner } from "./components/LoaderSpiner/LoaderSpinner";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

const Login: NextPage = () => {
  const { data, isFetching } = useQuery(["authData"], {
    enabled: false,
  });
  const router = useRouter();

  useEffect(() => {
    if (!data?.data?.token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [data?.data?.token]);

  return (
    <div className={styles.wrapper}>
      <HeaderComponent pagename="Login Page" />
      {isFetching ? <LoaderSpinner /> : <LoginForm />}
      <FooterComponent />
    </div>
  );
};

export default Login;
