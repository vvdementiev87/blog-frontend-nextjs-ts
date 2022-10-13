import * as React from "react";
import styles from "../styles/Registration.module.scss";
import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import { LoaderSpinner } from "./components/LoaderSpiner/LoaderSpinner";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";

const Registration: NextPage = () => {
  const { data, isFetching } = useQuery(["authData"], {
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
        {isFetching ? <LoaderSpinner /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Registration;
