import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, Input, InputProps } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

const getScoreFromValue = (value: number): number => {
    if (value < 25) return 0;

    if (value <= 30) return 1;

    return 3;
};

export const SecondQuestionPage = () => {
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[1].value);

    useEffect(() => {
        if (!value) return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 2,
                    value,
                    score: getScoreFromValue(+value),
                }),
            );
        }, 500);

        return () => clearInterval(timeoutId);
    }, [value]);

    const handleChange: InputProps['onChange'] = ({ currentTarget }) => {
        setValue(currentTarget.value);
    };
    return (
        <Flex vertical={true} gap={24} className={styles.root}>
            <QuestionTitle current={2} />
            <Form style={{ maxWidth: 600 }} layout='vertical'>
                <Form.Item
                    label={
                        <>
                            <span>
                                Индекс массы тела позволяет выявить наличие избыточного веса или
                                ожирения (ИМТ = вес, кг / рост, м2). Если у Вас не получается
                                произвести расчет самостоятельно, воспользуйтесь{' '}
                                <a
                                    href='https://clinic-cvetkov.ru/company/kalkulyator-imt/'
                                    target='_blank'
                                    title='Калькулятор ИМТ'
                                >
                                    {' '}
                                    специальным калькулятором
                                </a>
                                .
                            </span>
                        </>
                    }
                    help='Менее 25 кг/м2 (0 баллов), 25—30 кг/м2 (1 балл), больше 30 кг/м2 (3 балла)'
                    className={styles.label}
                >
                    <Input
                        variant='outlined'
                        size='large'
                        placeholder='Текст'
                        type='number'
                        value={value}
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
            <SurveyNavigation disabledForwardButton={!value} />
        </Flex>
    );
};
