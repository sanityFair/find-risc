import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, RadioGroupProps, Radio, Space } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms, FormData } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

export const ThirdQuestionPage = () => {
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [values, setValues] = useState({
        male: forms[2].value[0],
        female: forms[2].value[1],
    });

    useEffect(() => {
        if (!values.male.value || !values.female.value) return;

        let timeoutId = setTimeout(() => {
            console.log(Object.values(values));

            dispatch(
                changeScore({
                    index: 3,
                    value: Object.values(values) as FormData<string>[],
                    score: 0,
                }),
            );
        }, 500);

        return () => clearInterval(timeoutId);
    }, [values]);

    const handleChange: RadioGroupProps['onChange'] = ({ target }) => {
        let key = target.name as keyof typeof values;
        setValues((prev) => ({
            ...prev,
            [key]: {
                ...values[key],
                value: target.value as string,
                score: +target.value,
            },
        }));
    };
    return (
        <Flex vertical={true} gap={24} className={styles.root}>
            <QuestionTitle current={3} />
            <p>Окружность талии также указывает на наличие избыточного веса или ожирения.</p>
            <Form style={{ maxWidth: 600 }} layout='vertical' className={styles.form}>
                <Space direction='horizontal'>
                    <Form.Item label='Мужчины'>
                        <Radio.Group onChange={handleChange} name='male' value={values.male.value}>
                            <Space direction='vertical'>
                                <Radio value={0}>{'< '}94 см</Radio>
                                <Radio value={3}>94—102 см</Radio>
                                <Radio value={4}>{'> '} 102 см</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label='Женщины'>
                        <Radio.Group
                            onChange={handleChange}
                            name='female'
                            value={values.female.value}
                        >
                            <Space direction='vertical'>
                                <Radio value={0}>{'< '}94 см</Radio>
                                <Radio value={3}>94—102 см</Radio>
                                <Radio value={4}>{'> '} 102 см</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </Space>
                <Space direction='vertical' size={10}>
                    <p></p>
                    <p>(0 баллов)</p>
                    <p>(3 балла)</p>
                    <p>(4 балла)</p>
                </Space>
            </Form>
            <SurveyNavigation disabledForwardButton={!values.male && !values.female} />
        </Flex>
    );
};
