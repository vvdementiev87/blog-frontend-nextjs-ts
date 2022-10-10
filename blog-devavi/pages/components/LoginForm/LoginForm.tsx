import styles from "./LoginForm.module.scss";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AuthSevice } from "../../../app/service/auth.service";

export interface ILoginFormProps {}

export function LoginForm(props: ILoginFormProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { refetch, data, error } = useQuery(
    ["authData"],
    () => AuthSevice.login(username, password),
    {
      enabled: false,
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    refetch();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type={"password"}
        placeholder={"Enter password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button>Login</button>
      {error ? (
        <div className={styles.message}>{error?.message}</div>
      ) : (
        !data?.success && <div className={styles.message}>{data?.reason}</div>
      )}
    </form>
  );
}
