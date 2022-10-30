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
    { initialData: props.posts }
  );

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />

      {posts.isFetching ? (
        <LoaderSpinner />
      ) : (
        <BlogInfo
          id={posts.data.data?.posts[0].uuid}
          category={posts.data.data?.posts[0].post.category}
          title={posts.data.data?.posts[0].post.title}
          text={posts.data.data?.posts[0].post.text}
          imgDir={"./images/postImg1.jpg"}
        />
      )}
      {posts.isFetching ? <LoaderSpinner /> : <LatestPosts />}
      {posts.isFetching ? <LoaderSpinner /> : <FeaturedPosts />}
      {posts.isFetching ? <LoaderSpinner /> : <AllPosts />}
      <FooterComponent />
    </div>
  );
};

export default Home;
