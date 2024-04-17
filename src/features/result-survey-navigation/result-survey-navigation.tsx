import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import repeatIconUrl from '@/shared/assets/11.svg';
import methodIcon from '@/shared/assets/9.svg';
import { reset } from 'shared';
import { useDispatch } from 'react-redux';

import styles from './styles.module.css';

export const ResultSurveyNavigation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRepeatClick = () => {
        navigate('/');
        dispatch(reset());
    };

    const handleMethodologyClick = () => {
        navigate('/calculation-methodology', { relative: 'path' });
    };

    return (
        <Flex gap='middle' vertical={false} wrap='wrap' className={styles.root}>
            <Button
                size='large'
                type='default'
                className={styles.btn}
                onClick={handleMethodologyClick}
                icon={<img src={methodIcon} />}
            >
                Методология подсчета результата
            </Button>
            <Button size='large' type='primary' className={styles.btn} onClick={handleRepeatClick}>
                <span>
                    <img src={repeatIconUrl} alt='icon' className={styles.icon} />
                </span>
                Пройти тест заново
            </Button>
        </Flex>
    );
};
