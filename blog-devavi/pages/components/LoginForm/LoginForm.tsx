import styles from "./LoginForm.module.scss";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AuthSevice, IAuthData } from "../../../app/service/auth.service";
import { useRouter } from "next/router";

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();
  const { refetch, data, error } = useQuery<IAuthData, Error>(
    ["authData"],
    () => AuthSevice.login(username, password),
    {
      enabled: false,
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refetch();
    console.log(username);
    console.log(password);
    console.log(data);
    console.log(error);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>SIGN IN</h1>
      <h3>
        Don`t have account{" "}
        <button
          onClick={() => {
            router.push("/registration");
          }}
        >
          Sign Up
        </button>
      </h3>
      <input
        name="username"
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type={"password"}
        placeholder={"Enter password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Sign In</button>
      {error ? (
        <div className={styles.message}>{error?.message}</div>
      ) : (
        !data?.success && <div className={styles.message}>{data?.reason}</div>
      )}
    </form>
  );
}
