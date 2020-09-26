import { RootState } from '../Reducers/types';

export const homeworkSelector = (state: RootState) => state.studentModule.homework;
