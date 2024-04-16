import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import bannerUrl from "@/assets/banner.svg";
import { Footer } from "components";

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <header>
        <div/>
        <h2>
          Тест для оценки риска развития сахарного диабета 2 типа (шкала
          FINDRISC)
        </h2>
        <img alt="Картинка" src={bannerUrl} />
      </header>
      <section>
          Contnet
        <Outlet />
      </section>
      <Footer/>
    </main>
  );
};
