import styles from "./HeaderComponent.module.scss";
import React from "react";
import Image from "next/image";
import { QueryFunction, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { AuthSevice } from "../../../app/service/auth.service";
import { IAuthData } from "../../../app/service/auth.service";

export interface IHeaderComponentProps {
  token?: string;
}

const queryKey = "authData";

export default function HeaderComponent(props: IHeaderComponentProps) {
  const { data, refetch, isFetching } = useQuery<IAuthData, Error>(
    [queryKey],
    () => {
      if (props.token) {
        return AuthSevice.logout(props.token);
      } else {
        throw Error;
      }
    },
    {
      enabled: false,
    }
  );
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleSubmit = () => {
    refetch();
    queryClient.removeQueries([queryKey]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/images/DEVAVI_logo_black.png"
          alt="Logo"
          width={128}
          height={64}
        />
        <div className={styles.wrapper}>
          <ul>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>Travel</li>
            <li>Food</li>
            <li>Livestyle</li>
            <li>Fashion</li>
          </ul>
          <div className={styles.searchField}>
            <Image src="/images/search.svg" alt="Logo" width={18} height={18} />
            <input
              className={styles.searchInput}
              placeholder="Search here..."
              type="text"
            />
          </div>
        </div>
        {!data?.data?.token ? (
          <div>
            <button
              className={styles.btnSignIn}
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign In
            </button>
            <button className={styles.btnSignUp}>Sign Up</button>
          </div>
        ) : (
          <button className={styles.btnSignIn} onClick={() => handleSubmit()}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}
