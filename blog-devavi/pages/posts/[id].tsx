import styles from "../../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { IAuthData } from "../../app/service/auth.service";
import BlogDefault from "../components/BlogDefault/BlogDefault";
import React from "react";
import { PostsSevice } from "../../app/service/posts.service";
import LoaderSpinner from "../components/LoaderSpiner/LoaderSpinner";

const Home: NextPage = () => {
  const [findPost, setFindPost] = React.useState({
    uuid: "",
    post: {
      author: "",
      text: "",
      category: "",
      title: "",
      date: { date: "" },
      imgDir: "",
    },
  });
  const { query } = useRouter();

  const { data } = useQuery<IAuthData, Error>(["authData"]);
  const posts = useQuery<any, Error>(["postsData"], () =>
    PostsSevice.showPosts()
  );
  console.log(findPost);
  React.useEffect(() => {
    posts.data &&
      setFindPost(
        posts.data.data?.posts.find((post: any) => post.uuid == query.id)
      );
  }, [query.id, posts]);

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />
      {posts.isFetching ? (
        <LoaderSpinner />
      ) : (
        <BlogDefault
          author={findPost.post.author}
          category={findPost.post.category}
          title={findPost.post.title}
          date={findPost.post.date.date}
          text={findPost.post.text}
          imgDir={findPost.post.imgDir}
        />
      )}

      <FooterComponent />
    </div>
  );
};

export default Home;
