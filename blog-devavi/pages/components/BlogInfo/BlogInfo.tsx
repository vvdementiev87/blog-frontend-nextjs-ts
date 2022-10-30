import * as React from "react";
import styles from "./BlogInfo.module.scss";
import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";

export interface IBlogInfoProps {
  id: string;
  category: string;
  title: string;
  text: string;
  imgDir: string;
}

export default function BlogInfo(props: IBlogInfoProps) {
  return (
    <div className={styles.blogMain}>
      <div className={styles.blogLeft}>
        <div className={styles.blogCard}>
          <h3>{props.category}</h3>
          <Link href={"/posts/" + props.id}>
            <h1>{props.title}</h1>
          </Link>
          <div className={styles.blogDate}>
            <h4>{""}</h4>
            <h4>{""}</h4>
          </div>
          <div className={styles.blogText}>
            {props?.text ? parse(props?.text) : ""}
          </div>
          <button>Read more</button>
        </div>
      </div>
      <div className={styles.blogRight}>
        <Image src={props.imgDir} alt="ImgPost" width={500} height={500} />
      </div>
    </div>
  );
}
