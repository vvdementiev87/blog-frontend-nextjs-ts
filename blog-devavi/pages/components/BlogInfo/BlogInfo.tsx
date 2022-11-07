import * as React from "react";
import styles from "./BlogInfo.module.scss";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

export interface IPost {
  uuid: string;
  post: {
    category: any;
    title: string;
    text: any;
    textShort: any;
    date: any;
    imgDir: string;
  };
}

export interface IBlogInfoProps {
  posts: IPost[];
}

export default function BlogInfo(props: IBlogInfoProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [length, setLength] = React.useState(0);
  React.useEffect(() => {
    Array.isArray(props.posts) && setLength(props.posts.length);
  }, [props.posts]);

  const next = () => {
    currentIndex < length - 1
      ? setCurrentIndex((prevState) => prevState + 1)
      : setCurrentIndex(0);
  };

  const prev = () => {
    currentIndex > 0
      ? setCurrentIndex((prevState) => prevState - 1)
      : setCurrentIndex(length - 1);
  };

  return (
    <div className={styles.blogMain}>
      <div className={styles.blogLeft}>
        {props.posts?.length > 0 && (
          <div>
            <Carousel
              id={props.posts[currentIndex].uuid}
              category={props.posts[currentIndex].post.category}
              date={props.posts[currentIndex].post.date.date}
              title={props.posts[currentIndex].post.title}
              text={props.posts[currentIndex].post.textShort}
            />
            <div className={styles.carouselWrapper}>
              <button onClick={prev} className={styles.btnArrow}>
                &lt;
              </button>
              <div className={styles.carouselContentWrapper}>
                {props.posts.map((post, index) => (
                  <div key={index}>
                    {index === currentIndex ? (
                      <div className={styles.carouselCircleSelected}></div>
                    ) : (
                      <div className={styles.carouselCircleDisabled}></div>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={next} className={styles.btnArrow}>
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.blogRight}>
        {props.posts?.length > 0 && (
          <Image
            src={props.posts[currentIndex].post.imgDir}
            alt="ImgPost"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
    </div>
  );
}
