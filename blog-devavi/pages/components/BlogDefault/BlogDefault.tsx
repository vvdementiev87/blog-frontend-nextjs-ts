import * as React from "react";
import styles from "./BlogDefault.module.scss";
import Image from "next/image";

export interface IBlogDefaultProps {
  category: any;
  title: string;
  date: Date;
  text: any;
  author: string;
  imgDir: string;
}

export default function BlogDefault(props: IBlogDefaultProps) {
  const [currentDate, setCurrentDate] = React.useState(0);
  React.useEffect(() => {
    const date = new Date();
    const timeLeft = date?.getTime() - props.date?.getTime();
    setCurrentDate(timeLeft / 3600);
  }, [props.date]);

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
            <h4>
              {props.date?.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h4>
            <h4>{currentDate}</h4>
          </div>
        </div>

        <div className={styles.blogCardWrapper}>
          <div className={styles.blogCardLeft}>
            <h4>{currentDate} Likes</h4>
            <h4>{currentDate} Comments</h4>
          </div>
          <div className={styles.blogCardRight}>
            <>{props.text}</>
          </div>
        </div>
      </div>
    </div>
  );
}
