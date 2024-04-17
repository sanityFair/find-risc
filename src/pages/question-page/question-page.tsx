import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, Input, InputProps } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

const getScoreFromValue = (value: number): number => {
    if (value < 45) return 0;

    if (value >= 45 || value <= 54) return 2;

    if (value >= 55 || value <= 64) return 3;

    return 4;
};

export const FirstQuestionPage = () => {
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[0].value);

    useEffect(() => {
        if (!value) return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 1,
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
            <QuestionTitle current={1} />
            <Form style={{ maxWidth: 360 }} layout='vertical'>
                <Form.Item
                    label='Введите возраст Вашего пациента'
                    help='До 45 лет (0 баллов), 45—54 года (2 балла),  55—64 года (3 балла), cтарше 65 лет (4 балла)'
                    className={styles.label}
                >
                    <Input
                        variant='outlined'
                        size='large'
                        placeholder='Текст'
                        value={value}
                        onChange={handleChange}
                        type='number'
                    />
                </Form.Item>
            </Form>
            <SurveyNavigation disabledForwardButton={!value} />
        </Flex>
    );
};
