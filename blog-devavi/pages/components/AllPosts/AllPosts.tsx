import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import PostCard from "../PostCard/PostCard";
import styles from "./AllPosts.module.scss";
import LoaderSpinner from "../../components/LoaderSpiner/LoaderSpinner";

interface IAllPostsProps {}

const AllPosts: React.FunctionComponent<IAllPostsProps> = (props) => {
  const [categories, setCategories] = React.useState([
    "Travel",
    "Food",
    "Lifestyle",
  ]);
  const [tags, setTags] = React.useState([
    "Journey",
    "Life",
    "Food",
    "Fashion",
    "UI",
    "Interior",
    "Minimalistic",
    "Design",
  ]);
  const posts = useQuery<any, Error>(["postsData"]);

  return (
    <div className={styles.postsMain}>
      <div className={styles.postsContainer}>
        <div className={styles.postsTop}>
          <h1>All Posts</h1>
        </div>
        <div className={styles.postsBottom}>
          <div className={styles.postsWrapper}>
            {posts.isFetching ? (
              <LoaderSpinner />
            ) : (
              posts.data.data.posts.map((post: any) => (
                <div key={post.uuid}>
                  <PostCard
                    id={post.uuid}
                    category={post.post.category}
                    title={post.post.title}
                    date={new Date(post.post.date)}
                  />
                </div>
              ))
            )}
          </div>
          <div className={styles.categoriesWrapper}>
            <div className={styles.categoriesList}>
              <h4>Featured Category</h4>
              {categories.map((category) => (
                <div key={category} className={styles.categoriesItem}>
                  <div className={styles.categoriesText}>{category}</div>
                </div>
              ))}
            </div>
            <div className={styles.tagsList}>
              <h4>All Tags</h4>
              <div className={styles.tagsBox}>
                {tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
