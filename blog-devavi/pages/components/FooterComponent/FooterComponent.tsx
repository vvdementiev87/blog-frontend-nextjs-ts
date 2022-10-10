import * as React from "react";
import styles from "./FooterComponent.module.scss";

export interface IFooterComponentProps {}

export function FooterComponent(props: IFooterComponentProps) {
  return (
    <footer className={styles.footer}>
      <p>
        <span>&#169;</span> Devavi
      </p>
    </footer>
  );
}
