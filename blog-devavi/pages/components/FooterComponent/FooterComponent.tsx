import Image from "next/image";
import * as React from "react";
import styles from "./FooterComponent.module.scss";

export interface IFooterComponentProps {}

export default function FooterComponent(props: IFooterComponentProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topWrapper}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/DEVAVI_logo_white.png"
              alt="Logo"
              width={128}
              height={64}
            />
            <h5>
              Phasellus porttitor sapien a purus venenatis condimentum. Nunc
              lectus ipsum, laoreet ut efficitur.
            </h5>
          </div>
          <div className={styles.listWrapper}>
            <h4>Category</h4>
            <ul>
              <li>Travel</li>
              <li>Food</li>
              <li>Livestyle</li>
              <li>Fashion</li>
            </ul>
          </div>
          <div className={styles.listWrapper}>
            <h4>Follow us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className={styles.emailWrapper}>
            <h4>Newsletter</h4>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="Enter Email"></input>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <p>
            <span>&#169;</span> Devavi - Blog
          </p>
          <p>Designed by DeVaVi</p>
        </div>
      </div>
    </footer>
  );
}
