import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { RESULTS } from 'shared/constants';

export type FormData<T = string> = {
    index: number;
    value: T | FormData<T>[];
    score: number;
};

type Forms = [
    FormData<string>,
    FormData<string>,
    FormData<FormData<string>[]>,
    FormData<string>,
    FormData<string>,
    FormData<string>,
    FormData<string>,
    FormData<string>,
];

type Payload = FormData<string>;

export type SurveyState = {
    forms: Forms;
    result: number;
};

const initialState: SurveyState = {
    forms: [
        {
            index: 1,
            value: '',
            score: 0,
        },
        {
            index: 2,
            value: '',
            score: 0,
        },
        {
            index: 3,
            value: [
                {
                    index: 4,
                    value: '',
                    score: 0,
                },
                {
                    index: 5,
                    value: '',
                    score: 0,
                },
            ],
            score: 0,
        },
        {
            index: 4,
            value: '0',
            score: 0,
        },
        {
            index: 5,
            value: '',
            score: 0,
        },
        {
            index: 6,
            value: '',
            score: 0,
        },
        {
            index: 7,
            value: '',
            score: 0,
        },
        {
            index: 8,
            value: '',
            score: 0,
        },
    ],
    result: 0,
};

export const surveySlice = createSlice({
    name: 'SURVEY',
    initialState,
    reducers: {
        changeScore: (state, { payload }: PayloadAction<Payload>) => {
            let forms = [...current(state).forms] as Forms;

            forms.splice(payload.index - 1, 1, payload);

            let result = forms.reduce((prev, curr) => {
                if (Array.isArray(curr.value)) {
                    prev += curr.value.reduce((prev, curr) => (prev += curr.score), 0);
                    return prev;
                }

                prev += curr.score;

                return prev;
            }, 0);

            return {
                result,
                forms,
            };
        },
        reset: () => initialState,
    },
});
export const surveySelectForms = (state: { surveyReducer: SurveyState }) =>
    state.surveyReducer.forms;

export const surveyResultSelect = (state: { surveyReducer: SurveyState }) => {
    let { result } = state.surveyReducer;

    let key = Object.keys(RESULTS).filter((key) => result < +key)[0] as keyof typeof RESULTS;

    return RESULTS[key];
};

export const { reset, changeScore } = surveySlice.actions;
export const surveyReducer = surveySlice.reducer;
