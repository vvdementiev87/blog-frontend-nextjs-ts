import React from "react";
import styles from "./Carousel.module.scss";
import Link from "next/link";
import parse from "html-react-parser";

type Props = {
  id: string;
  category: string;
  title: string;
  text: string;
};

const Carousel = (props: Props) => {
  return (
    <div className={styles.carouselCard}>
      <h3>{props.category}</h3>
      <h1>{props.title}</h1>
      <div className={styles.carouselDate}>
        <h4>{""}</h4>
        <h4>{""}</h4>
      </div>
      <div className={styles.carouselText}>
        {props?.text ? parse(props?.text) : ""}
      </div>
      <Link href={"/posts/" + props.id}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default Carousel;
