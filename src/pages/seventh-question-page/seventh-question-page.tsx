import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, RadioGroupProps, Radio, Space } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

export const SeventhQuestionPage = () => {
    /*
    TODO: Вынести в хук этот код;
  */
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[6].value);

    useEffect(() => {
        if (value === '') return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 7,
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
            <QuestionTitle current={7} />
            <Form style={{ maxWidth: 600 }} layout='vertical' className={styles.form}>
                <Space direction='horizontal'>
                    <Form.Item
                        label='Обнаруживали ли у Вашего пациента повышение глюкозы (сахара) в крови выше нормы (во время диспансеризации, проф. осмотра, во время болезни или беременности)?'
                        name='answer'
                    >
                        <Space align='center'>
                            <Radio.Group onChange={handleChange} value={value}>
                                <Space direction='vertical'>
                                    <Radio value={0}>Нет</Radio>
                                    <Radio value={1}>Да</Radio>
                                </Space>
                            </Radio.Group>
                            <Space direction='vertical' size={10}>
                                <p>(0 баллов)</p>
                                <p>(1 балл)</p>
                            </Space>
                        </Space>
                    </Form.Item>
                </Space>
            </Form>
            <SurveyNavigation disabledForwardButton={value === ''} />
        </Flex>
    );
};
