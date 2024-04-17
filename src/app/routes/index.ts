import {
    MainPage,
    StartPage,
    FirstQuestionPage,
    SecondQuestionPage,
    ThirdQuestionPage,
    FourthQuestionPage,
    FifthQuestionPage,
    SixthQuestionPage,
    SeventhQuestionPage,
    EighthQuestionPage,
    ResultPage,
    CalculationMethodologyPage,
} from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainPage,
        children: [
            {
                index: true,
                Component: StartPage,
            },
            {
                path: '1',
                Component: FirstQuestionPage,
            },
            {
                path: '2',
                Component: SecondQuestionPage,
            },
            {
                path: '3',
                Component: ThirdQuestionPage,
            },
            {
                path: '4',
                Component: FourthQuestionPage,
            },
            {
                path: '5',
                Component: FifthQuestionPage,
            },
            {
                path: '6',
                Component: SixthQuestionPage,
            },
            {
                path: '7',
                Component: SeventhQuestionPage,
            },
            {
                path: '8',
                Component: EighthQuestionPage,
            },
            {
                path: 'result',
                Component: ResultPage,
            },
            {
                path: 'calculation-methodology',
                Component: CalculationMethodologyPage,
            },
        ],
    },
]);
