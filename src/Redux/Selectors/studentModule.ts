import { RootState } from '../Reducers/types';

export const homeworkSelector = (state: RootState) => state.studentModule.homework;

export const teachersSelector = (state: RootState) => state.studentModule.teachers;

export const upcomingClassesSelector = (state: RootState) => state.studentModule.upcomingClasses;

export const previousClassesSelector = (state: RootState) => state.studentModule.previousClasses;

export const featuredSubjectsSelector = (state: RootState) => state.studentModule.featuredSubjects;
