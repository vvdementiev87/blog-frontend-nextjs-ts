import * as React from "react";
import styles from "./BlogInfo.module.scss";
import Link from "next/link";

export interface IBlogInfoProps {
  id: string;
  category: string;
  title: string;
  date: Date;
  text: string;
}

export default function BlogInfo(props: IBlogInfoProps) {
  const [currentDate, setCurrentDate] = React.useState(0);
  React.useEffect(() => {
    const date = new Date();
    const timeLeft = date?.getTime() - props.date?.getTime();
    setCurrentDate(timeLeft / 3600);
  }, [props.date]);

  return (
    <div className={styles.blogMain}>
      <div className={styles.blogLeft}>
        <div className={styles.blogCard}>
          <h3>{props.category}</h3>
          <Link href={"/posts/${props.id}"}>
            <h1>{props.title}</h1>
          </Link>
          <div>
            <h4>
              {props.date?.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h4>
            <h4>{currentDate}</h4>
          </div>
          <p>{props.text}</p>
          <button>Read more</button>
        </div>
      </div>
      <div className={styles.blogRight}></div>
    </div>
  );
}
