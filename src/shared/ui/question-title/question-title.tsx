import styles from './styles.module.css';

type Props = {
    current: number;
    total?: number;
};

export const QuestionTitle = ({ current, total = 8 }: Props) => (
    <p className={styles.root}>
        Вопрос {current}/{total}
    </p>
);
