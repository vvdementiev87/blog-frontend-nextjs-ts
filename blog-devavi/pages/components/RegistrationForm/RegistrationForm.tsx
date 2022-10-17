import styles from "./RegistrationForm.module.scss";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { AuthSevice } from "../../../app/service/auth.service";
import { useRouter } from "next/router";
import { IUserData, UserSevice } from "../../../app/service/user.servise";

export interface IRegistrationFormProps {}

export default function RegistrationForm(props: IRegistrationFormProps) {
  const [username, setUsername] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const router = useRouter();
  const { refetch, data, error } = useQuery<IUserData, Error>(
    ["userData"],
    () => UserSevice.createUser(username, password, firstname, lastname),
    {
      enabled: false,
    }
  );
  console.log(data);

  const handleSubmit = (e: any) => {
    if (password === passwordCheck) {
      e.preventDefault();
      refetch();
      setErrorMessage("");
      data?.success && router.push("/login");
    } else {
      setErrorMessage("Passwords are not equal");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <h3>
        Already have account
        <button
          onClick={() => {
            router.push("/login");
          }}
        >
          Sign In
        </button>
      </h3>
      <input
        name="username"
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="firstname"
        placeholder={"Enter firstname"}
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        name="lastname"
        placeholder={"Enter lastname"}
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        type={"password"}
        placeholder={"Enter password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type={"password"}
        placeholder={"Enter password again"}
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
      />
      <button>Sign Up</button>
      {errorMessage ? (
        <div className={styles.message}>{errorMessage}</div>
      ) : error ? (
        <div className={styles.message}>{error?.message}</div>
      ) : (
        !data?.success && <div className={styles.message}>{data?.reason}</div>
      )}
    </form>
  );
}
