import styles from './styles.module.css';
import bannerUrl from '@/shared/assets/banner.svg';

export const Header = () => (
    <header className={styles.header}>
        <div />
        <h2>Тест для оценки риска развития сахарного диабета 2 типа (шкала FINDRISC)</h2>
        <img alt='Картинка' src={bannerUrl} />
    </header>
);
