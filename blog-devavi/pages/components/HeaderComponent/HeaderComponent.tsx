import styles from "./HeaderComponent.module.scss";
import * as React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

export interface IHeaderComponentProps {
  pagename: string;
}

export function HeaderComponent(props: IHeaderComponentProps) {
  const { data } = useQuery(["authData"]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src="/images/logo192.png" alt="Logo" width={64} height={64} />
        <p>{props.pagename}</p>
        <p>{data?.data?.username}</p>
      </div>
    </header>
  );
}
