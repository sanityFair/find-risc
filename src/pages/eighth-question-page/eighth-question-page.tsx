import styles from './styles.module.css';
import { SurveyNavigation } from 'features';
import { Flex, Form, RadioGroupProps, Radio, Space } from 'antd';
import { QuestionTitle, changeScore, surveySelectForms } from 'shared';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';

export const EighthQuestionPage = () => {
    /*
    TODO: Вынести в хук этот код;
  */
    const dispatch = useDispatch();
    const forms = useSelector(surveySelectForms, isEqual);
    const [value, setValue] = useState(forms[7].value);

    useEffect(() => {
        if (value === '') return;

        let timeoutId = setTimeout(() => {
            dispatch(
                changeScore({
                    index: 8,
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
            <QuestionTitle current={8} />
            <Form style={{ maxWidth: 600 }} layout='vertical' className={styles.form}>
                <Space direction='horizontal'>
                    <Form.Item
                        label='Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2 типа?(Выберите один или несколько вариантов ответов).'
                        name='answer'
                    >
                        <Space align='center'>
                            <Radio.Group value={value} onChange={handleChange}>
                                <Space direction='vertical'>
                                    <Radio value={0}>Нет</Radio>
                                    <Radio value={3}>
                                        Да: дедушка/бабушка, тетя/дядя, двоюродные братья, сестры
                                    </Radio>
                                    <Radio value={5}>
                                        Да: родители, брат/сестра или собственный ребенок
                                    </Radio>
                                </Space>
                            </Radio.Group>
                            <Space direction='vertical' size={10}>
                                <p>(0 баллов)</p>
                                <p>(3 балла)</p>
                                <p>(5 баллов)</p>
                            </Space>
                        </Space>
                    </Form.Item>
                </Space>
            </Form>
            <SurveyNavigation disabledForwardButton={value === ''} />
        </Flex>
    );
};
