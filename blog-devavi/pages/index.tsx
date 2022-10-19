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
          category="Interior"
          /* {posts.data.data.posts[0].post} */
          title="How to Get Started With Interior Design"
          date={new Date(2022, 9, 13)}
          text="Nulla et commodo turpis. Etiam hendrerit ornare pharetra. Cras eleifend purus vitae lorem venenatis bibendum. Sed commodo mi quis augue finibus, ut feugiat erat aliquam."
        />
      )}

      <FooterComponent />
    </div>
  );
};

export default Home;
