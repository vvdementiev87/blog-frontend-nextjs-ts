import styles from "../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import { IAuthData } from "../app/service/auth.service";
import { PostsSevice } from "../app/service/posts.service";
import LoaderSpinner from "./components/LoaderSpiner/LoaderSpinner";
import { InferGetStaticPropsType } from "next";
import AllPosts from "./components/AllPosts/AllPosts";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
  const posts: any = await PostsSevice.showPosts();
  return { props: { posts } };
};

export interface IHomePageProps {
  posts: any;
}

const Home: NextPage<IHomePageProps> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { data } = useQuery<IAuthData, Error>(["authData"]);
  const posts = useQuery<any, Error>(
    ["postsData"],
    () => PostsSevice.showPosts(),
    { initialData: props.posts, refetchOnMount: true }
  );

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta name="charset" content="utf-8" key="charset" />
        <meta name="url" content="https://vvdementiev87.github.io/" key="url" />
        <meta name="theme-color" content="#272343e9" key="theme-color" />
        <meta name="title" content="Portfolio of vvdementiev87" key="title" />
        <meta
          name="keywords"
          content="Portfolio vvdementiev87"
          key="keywords"
        />
      </Head>
      <HeaderComponent token={data?.data?.token} />

      {posts.isFetching ? (
        <LoaderSpinner />
      ) : (
        <BlogInfo posts={posts?.data.data?.posts} />
      )}
      {posts.isFetching ? <LoaderSpinner /> : <LatestPosts />}
      {posts.isFetching ? (
        <LoaderSpinner />
      ) : (
        <FeaturedPosts heading="Featured posts" />
      )}
      {posts.isFetching ? <LoaderSpinner /> : <AllPosts />}
      <FooterComponent />
    </div>
  );
};

export default Home;
