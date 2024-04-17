import styles from './styles.module.css';
import phoneUrl from '@/shared/assets/10.svg';
import addressUrl from '@/shared/assets/6.svg';

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className={styles.root}>
            <div>
                <div className={styles.wrapper}>
                    <p className={styles.text}>СВЯЖИТЕСЬ С НАМИ</p>
                    <div className={styles.item}>
                        <img src={phoneUrl} alt='phone' />
                        <p className={styles.text}>Телефон</p>
                    </div>
                    <div className={styles.item}>
                        <img src={addressUrl} alt='address' />
                        <p className={styles.text}>Адрес</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>
                        <p>© {currentYear} site.RU</p>
                        <p> Все права защищены</p>
                    </div>
                    <p>Дата последнего обновления сайта: {currentYear}</p>
                </div>
            </div>
        </footer>
    );
};
