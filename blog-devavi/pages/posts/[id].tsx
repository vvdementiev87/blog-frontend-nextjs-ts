import styles from "../../styles/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { IAuthData } from "../../app/service/auth.service";
import BlogDefault from "../components/BlogDefault/BlogDefault";

const Home: NextPage = () => {
  const { query } = useRouter();
  console.log(useRouter());
  const { data } = useQuery<IAuthData, Error>(["authData"]);

  return (
    <div className={styles.wrapper}>
      <HeaderComponent token={data?.data?.token} />
      <BlogDefault
        author="Kadin Dias"
        category={query.id}
        title="How to Get Started With Interior Design"
        date={new Date(2022, 9, 13)}
        text={
          <>
            <p>
              Джастин Бивер сделал признание, которого никак не ожидали даже
              самые большие поклонники талантливого музыканта и поэта. Молодой
              певец признался, что когда он набрал свой первый тег, его жизнь
              стала легче. Из окружения канадца сообщают, что частные наставники
              Бивера, Райан Лослинг и Николас Крейт, часто гуляют по
              Лос-Анджелесу, споря об инструменте HTML-валидатор.
            </p>
            <br />
            <p>
              Бивер уже создал несколько сайтов и не намерен останавливаться на
              достигнутом.
              <q>Я, вероятно, спою об HTML в своём следующем альбоме</q>, -
              добавил певец.
            </p>
          </>
        }
        imgDir={"./../images/postImg1.jpg"}
      />

      <FooterComponent />
    </div>
  );
};

export default Home;
