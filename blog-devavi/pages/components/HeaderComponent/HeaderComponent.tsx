import styles from "./HeaderComponent.module.scss";
import * as React from "react";
import Image from "next/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { AuthSevice } from "../../../app/service/auth.service";

export interface IHeaderComponentProps {
  token: string;
}

const queryKey = "authData";

export function HeaderComponent(props: IHeaderComponentProps) {
  const { data, refetch, isFetching } = useQuery(
    [queryKey],
    () => AuthSevice.logout(props.token),
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
          src="/images/DEVAVI_logo.png"
          alt="Logo"
          width={128}
          height={64}
        />
        <div className={styles.wrapper}>
          <ul>
            <li>Home</li>
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
