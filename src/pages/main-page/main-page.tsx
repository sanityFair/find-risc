import { Content, Footer, Header } from 'widgets';

import styles from './styles.module.css';

export const MainPage = () => (
    <main className={styles.root}>
        <Header />
        <Content />
        <Footer />
    </main>
);
