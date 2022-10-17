import * as React from "react";
import styles from "../styles/Login.module.scss";
import type { NextPage } from "next";
import LoginForm from "./components/LoginForm/LoginForm";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import LoaderSpinner from "./components/LoaderSpiner/LoaderSpinner";
import { IAuthData } from "../app/service/auth.service";

const Login: NextPage = () => {
  const { data, isFetching } = useQuery<IAuthData, Error>(["authData"], {
    enabled: false,
  });
  const router = useRouter();

  React.useEffect(() => {
    if (data?.data?.token) {
      router.push("/");
    }
  }, [data?.data?.token]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBox}>
        <Image
          src="/images/login.jpg"
          alt="Login"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.loginBox}>
        {isFetching ? <LoaderSpinner /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Login;
