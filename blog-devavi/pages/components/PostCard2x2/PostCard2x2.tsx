import * as React from "react";
import styles from "./PostCard2x2.module.scss";
import Link from "next/link";
import Image from "next/image";

interface IPostCardProps {
  id: string;
  category: string;
  title: string;
  date: Date;
  imgDir: string;
}

const PostCard2x2: React.FunctionComponent<IPostCardProps> = (props) => {
  const [currentDate, setCurrentDate] = React.useState(0);
  React.useEffect(() => {
    const date = new Date();
    const timeLeft = date?.getTime() - props.date?.getTime();
    setCurrentDate(timeLeft / 3600);
  }, [props.date]);
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardImg}>
        <Image
          src={props.imgDir}
          alt="ImgPost"
          layout="fill"
          object-fit="contain"
          object-position="center"
        />
      </div>
      <div className={styles.cardText}>
        <h3>{props.category}</h3>
        <h1>{props.title}</h1>
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
        <Link href={"/posts/" + props.id}>
          <p>Read arcticle</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard2x2;