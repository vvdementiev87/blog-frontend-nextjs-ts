import React from "react";
import styles from "./Carousel.module.scss";
import Link from "next/link";
import parse from "html-react-parser";
import internal from "stream";
import { dateConverter, TimeDifference } from "../../../app/utils/dateUtil";

type Props = {
  id: string;
  category: string;
  title: string;
  text: string;
  date: string;
};

const Carousel = (props: Props) => {
  return (
    <div className={styles.carouselCard}>
      <h3>{props.category}</h3>
      <h1>{props.title}</h1>
      <div className={styles.carouselDate}>
        <h4>{dateConverter(props.date)}</h4>
        <h6>&bull;</h6>
        <h4>{TimeDifference(props.date)}</h4>
      </div>
      <div className={styles.carouselText}>
        <p>{props.text}</p>
      </div>
      <Link href={"/posts/" + props.id}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default Carousel;
