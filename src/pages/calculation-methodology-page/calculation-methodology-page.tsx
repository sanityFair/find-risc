import { Button, Flex } from 'antd';
import iconUrl from '@/shared/assets/methodology.svg';
import iconMobileUrl from '@/shared/assets/methodology-mobile.svg';
import leftIconUrl from '@/shared/assets/7.svg';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'shared';
import { useEffect, useState } from 'react';

export const CalculationMethodologyPage = () => {
    const navigate = useNavigate();

    const { width } = useWindowSize();
    const [url, setUrl] = useState(iconUrl);

    useEffect(() => {
        if (!width) return;

        if (width < 500) {
            setUrl(iconMobileUrl);
        } else {
            setUrl(iconUrl);
        }
    }, [width]);

    const handleBackwardClick = () => {
        navigate('../', { relative: 'path' });
    };

    return (
        <Flex vertical={true} gap={24} justify='center'>
            <br />
            <img src={url} alt='icon' style={{ width: '100%', height: 'auto' }} />
            <Button
                size='large'
                type='default'
                className={styles.btn}
                onClick={handleBackwardClick}
                icon={<img src={leftIconUrl} />}
            >
                Назад
            </Button>
        </Flex>
    );
};
