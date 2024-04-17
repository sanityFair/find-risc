import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, Select, SelectProps } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

export const FourthQuestionPage = () => {
    /*
    TODO: Вынести в хук этот код;
  */
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[3].value);

    useEffect(() => {
        if (!value) return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 2,
                    value,
                    score: +value,
                }),
            );
        }, 500);

        return () => clearInterval(timeoutId);
    }, [value]);

    const handleChange: SelectProps['onChange'] = (value) => {
        setValue(value);
    };

    return (
        <Flex vertical={true} gap={24} className={styles.root}>
            <QuestionTitle current={4} />
            <Form style={{ maxWidth: 420 }} layout='vertical'>
                <Form.Item
                    label='Как часто Ваш пациент ест овощи, фрукты или ягоды?'
                    className={styles.label}
                >
                    <Select value={value} placeholder='Текст' onChange={handleChange}>
                        <Select.Option value='0'>Каждый день (0 баллов)</Select.Option>
                        <Select.Option value='1'>Не каждый день (1 балл)</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
            <SurveyNavigation />
        </Flex>
    );
};
