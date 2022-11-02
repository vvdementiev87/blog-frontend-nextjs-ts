import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import PostCard3x3 from "../PostCard3x3/PostCard3x3";
import styles from "./LatestPosts.module.scss";
import LoaderSpinner from "../LoaderSpiner/LoaderSpinner";

interface ILatestPostsProps {}

const LatestPosts: React.FunctionComponent<ILatestPostsProps> = (props) => {
  const posts = useQuery<any, Error>(["postsData"]);

  return (
    <div className={styles.postsMain}>
      <div className={styles.postsContainer}>
        <div className={styles.postsTop}>
          <h1>Latest posts</h1>
        </div>
        <div className={styles.postsBottom}>
          <div className={styles.postsWrapper}>
            {posts.isFetching ? (
              <LoaderSpinner />
            ) : (
              posts.data.data?.posts.map((post: any) => (
                <div key={post.uuid}>
                  <PostCard3x3
                    id={post.uuid}
                    category={post.post.category}
                    title={post.post.title}
                    date={post.post.date.date}
                    imgDir={"./images/postImg1.jpg"}
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

export default LatestPosts;
