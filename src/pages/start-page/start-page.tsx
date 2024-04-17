import { Button, ButtonProps } from 'antd';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
    const navigate = useNavigate();

    const handleStartClick: ButtonProps['onClick'] = () => {
        navigate('/1', { replace: true });
    };

    return (
        <div className={styles.root}>
            <div>
                <p>
                    Своевременная диагностика нарушений углеводного обмена крайне важна для подбора
                    корректной АГ-терапии пациентам. Раннее диагностирование позволяет не только
                    замедлить манифестацию СД 2 типа, но и избежать у таких пациентов необратимых
                    изменений почечной ткани на фоне углеводных нарушений и повышенного АД.
                </p>
                <br />
                <p>
                    Дорогой доктор, во время приема Вы можете предложить пациенту пройти этот
                    короткий опрос, чтобы оценить 10-летний риск развития СД 2 типа и дать
                    необходимые рекомендации.
                </p>
                <br />
                <Button size='large' type='primary' onClick={handleStartClick}>
                    Начать
                </Button>
            </div>
        </div>
    );
};
