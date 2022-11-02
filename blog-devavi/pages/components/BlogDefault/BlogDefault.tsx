import * as React from "react";
import styles from "./BlogDefault.module.scss";
import Image from "next/image";
import { dateConverter, TimeDifference } from "../../../app/utils/dateUtil";
import parse from "html-react-parser";

export interface IBlogDefaultProps {
  category: any;
  title: string;
  date: string;
  text: any;
  author: string;
  imgDir: string;
}

export default function BlogDefault(props: IBlogDefaultProps) {
  return (
    <div className={styles.blogMain}>
      <div className={styles.blogTop}>
        <Image
          src={props.imgDir}
          alt="ImgPost"
          layout="fill"
          objectFit="cover"
          object-position="center"
        />
      </div>
      <div className={styles.blogBottom}>
        <div className={styles.blogCardHeader}>
          <h3>{props.category}</h3>
          <h1>{props.title}</h1>
          <div className={styles.blogCardData}>
            <h3>{props.author}</h3>
            <h6>&bull;</h6>
            <h3>{dateConverter(props.date)}</h3>
            <h6>&bull;</h6>
            <h3>{TimeDifference(props.date)}</h3>
          </div>
        </div>

        <div className={styles.blogCardWrapper}>
          <div className={styles.blogCardLeft}>
            <h4>{"11"} Likes</h4>
            <h4>{"100"} Comments</h4>
          </div>
          <div className={styles.blogCardRight}>
            <>{props?.text ? parse(props?.text) : ""}</>
            <div className={styles.blogBottomBtn}>
              <button className={styles.blogBtn}>Like</button>
              <div className={styles.blogShare}>
                <p>Share the post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
