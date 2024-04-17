import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.css';

export const Content = () => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState('');

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage('fade-out');
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (transitionStage === 'fade-out') {
            setTransistionStage('fade-in');
            setDisplayLocation(location);
        }
    };

    return (
        <section
            className={classNames(styles.content, styles[transitionStage])}
            onAnimationEnd={handleAnimationEnd}
        >
            <Outlet />
        </section>
    );
};
