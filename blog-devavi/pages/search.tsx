import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import { IAuthData } from "../app/service/auth.service";
import { PostsSevice } from "../app/service/posts.service";
import LoaderSpinner from "./components/LoaderSpiner/LoaderSpinner";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import { useRouter } from "next/router";
import React from "react";

export interface ISearchPageProps {
  posts: any;
}

const Search: NextPage<ISearchPageProps> = (props) => {
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const { data } = useQuery<IAuthData, Error>(["authData"]);
  const posts = useQuery<any, Error>(
    ["postsData"],
    () => PostsSevice.showPosts(),
    { initialData: props.posts }
  );
  const router = useRouter();

  React.useEffect(() => {
    !Array.isArray(router.query.searchRequest) &&
      router.query.searchRequest &&
      setFilteredPosts(
        posts.data.data?.posts.filter((post: any) => {
          return (
            post?.post.text
              .toLowerCase()
              .includes(router.query.searchRequest) ||
            post?.post.title.toLowerCase().includes(router.query.searchRequest)
          );
        })
      );
  }, [router.query.searchRequest]);

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />
      {posts.isFetching ? (
        <LoaderSpinner />
      ) : (
        filteredPosts.length > 0 && <BlogInfo posts={filteredPosts} />
      )}
      {posts.isFetching ? <LoaderSpinner /> : <FeaturedPosts />}
      <FooterComponent />
    </div>
  );
};

export default Search;
