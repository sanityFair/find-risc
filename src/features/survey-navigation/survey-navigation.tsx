import { Button, Flex } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import leftIconUrl from '@/shared/assets/7.svg';
import rightIconUrl from '@/shared/assets/8.svg';

import styles from './styles.module.css';

type Props = {
    disabledForwardButton?: boolean;
    disabledBackwardButton?: boolean;
};
export const SurveyNavigation = ({ disabledBackwardButton, disabledForwardButton }: Props) => {
    const { pathname } = useLocation();
    let index = +pathname.slice(1);
    const navigate = useNavigate();

    const handleBackwardClick = () => {
        let path = '../';

        --index;

        if (index > 0) path = `/${index}`;

        navigate(path, { relative: 'path' });
    };

    const handleForwardClick = () => {
        let path = `/${++index}`;

        if (index > 8) path = '/result';

        navigate(path, { relative: 'path' });
    };

    return (
        <Flex gap='middle' vertical={false} wrap='wrap' className={styles.root}>
            <Button
                size='large'
                type='default'
                className={styles.btn}
                onClick={handleBackwardClick}
                icon={<img src={leftIconUrl} />}
                disabled={disabledBackwardButton}
            >
                Назад
            </Button>
            <Button
                size='large'
                type='primary'
                className={styles.btn}
                onClick={handleForwardClick}
                disabled={disabledForwardButton}
            >
                Вперед
                <img src={rightIconUrl} alt='icon' className={styles.icon} />
            </Button>
        </Flex>
    );
};
