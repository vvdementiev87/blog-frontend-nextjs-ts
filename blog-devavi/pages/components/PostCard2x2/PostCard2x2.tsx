import * as React from "react";
import styles from "./PostCard2x2.module.scss";
import Link from "next/link";
import Image from "next/image";
import { dateConverter, TimeDifference } from "../../../app/utils/dateUtil";

interface IPostCardProps {
  id: string;
  category: string;
  title: string;
  date: string;
  imgDir: string;
}

const PostCard2x2: React.FunctionComponent<IPostCardProps> = (props) => {
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardImg}>
        <Image
          src={props.imgDir}
          alt="ImgPost"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.cardText}>
        <h3>{props.category}</h3>
        <h1>{props.title}</h1>
        <div className={styles.cardDate}>
          <h4>{dateConverter(props.date)}</h4>
          <h6>&bull;</h6>
          <h4>{TimeDifference(props.date)}</h4>
        </div>
        <Link href={"/posts/" + props.id}>
          <p>Read arcticle</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard2x2;
