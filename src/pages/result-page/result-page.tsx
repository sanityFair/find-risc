import styles from './styles.module.css';
import { ResultSurveyNavigation } from 'features';
import iconUrl from '@/shared/assets/2.svg';
import { Flex } from 'antd';
import { surveyResultSelect } from 'shared';
import { useSelector } from 'react-redux';

export const ResultPage = () => {
    const text = useSelector(surveyResultSelect);
    return (
        <div className={styles.root}>
            <Flex vertical={true} gap={24} justify='space-around'>
                <p className={styles.title}>Результат</p>
                <p className={styles.text}>{text}</p>
                <ResultSurveyNavigation />
            </Flex>
            <div>
                <img src={iconUrl} alt='icon' />
            </div>
        </div>
    );
};
