import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import PostCard2x2 from "../PostCard2x2/PostCard2x2";
import styles from "./FeaturedPosts.module.scss";
import LoaderSpinner from "../LoaderSpiner/LoaderSpinner";

interface IFeaturedPostsProps {
  heading: string;
  size?: number;
}

const FeaturedPosts: React.FunctionComponent<IFeaturedPostsProps> = (props) => {
  const posts = useQuery<any, Error>(["postsData"]);

  return (
    <div className={styles.postsMain}>
      <div className={styles.postsContainer}>
        <div className={styles.postsTop}>
          <h1>{props.heading}</h1>
        </div>
        <div className={styles.postsBottom}>
          <div className={styles.postsWrapper}>
            {posts.isFetching ? (
              <LoaderSpinner />
            ) : props.size ? (
              posts.data.data?.posts.slice(0, props.size).map((post: any) => (
                <div key={post.uuid}>
                  <PostCard2x2
                    id={post.uuid}
                    category={post.post.category}
                    title={post.post.title}
                    date={post.post.date.date}
                    imgDir={post.post.imgDir}
                  />
                </div>
              ))
            ) : (
              posts.data.data?.posts.map((post: any) => (
                <div key={post.uuid}>
                  <PostCard2x2
                    id={post.uuid}
                    category={post.post.category}
                    title={post.post.title}
                    date={post.post.date.date}
                    imgDir={post.post.imgDir}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
