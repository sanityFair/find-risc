import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, RadioGroupProps, Radio, Space } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

export const SixthQuestionPage = () => {
    /*
    TODO: Вынести в хук этот код;
  */
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[5].value);

    useEffect(() => {
        if (value === '') return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 6,
                    value,
                    score: +value,
                }),
            );
        }, 500);

        return () => clearInterval(timeoutId);
    }, [value]);

    const handleChange: RadioGroupProps['onChange'] = ({ target }) => {
        setValue(target.value);
    };

    return (
        <Flex vertical={true} gap={24} className={styles.root}>
            <QuestionTitle current={6} />
            <Form style={{ maxWidth: 600 }} layout='vertical' className={styles.form}>
                <Space direction='horizontal'>
                    <Form.Item
                        label='Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения артериального давления?'
                        name='answer'
                    >
                        <Space align='center'>
                            <Radio.Group onChange={handleChange} value={value}>
                                <Space direction='vertical'>
                                    <Radio value={2}>Да</Radio>
                                    <Radio value={0}>Нет</Radio>
                                </Space>
                            </Radio.Group>
                            <Space direction='vertical' size={10}>
                                <p>(2 балла)</p>
                                <p>(0 баллов)</p>
                            </Space>
                        </Space>
                    </Form.Item>
                </Space>
            </Form>
            <SurveyNavigation disabledForwardButton={value == ''} />
        </Flex>
    );
};
