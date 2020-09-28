import { useMemo } from 'react';
import useFeatureTeachers from './useFeatureTeachers';
import useUpcomingClasses from './useUpcomingClasses';
import usePreviousClasses from './usePreviousClasses';
import useFeatureSubjects from './useFeatureSubjects';

function useHomepage() {
    const {
        isPending: isPendingTeacher,
        teachersImageCards,
        featuredTeachersCard,
        teachersBannerCards,
    } = useFeatureTeachers();
    const { isPending: isPendingUpcomingClasses, nextClassCard, upcomingClassCard } = useUpcomingClasses();
    const { isPending: isPendingPreviousClasses, prevClassImageCards } = usePreviousClasses();
    const { isPending: isPendingFeaturedSubjects, featuredSubjectsCard } = useFeatureSubjects();

    return useMemo(
        () => ({
            isPending:
                isPendingTeacher || isPendingUpcomingClasses || isPendingPreviousClasses || isPendingFeaturedSubjects,
            teachersImageCards,
            featuredTeachersCard,
            teachersBannerCards,
            nextClassCard,
            upcomingClassCard,
            prevClassImageCards,
            featuredSubjectsCard,
        }),
        [
            isPendingTeacher,
            teachersImageCards,
            featuredTeachersCard,
            teachersBannerCards,
            isPendingUpcomingClasses,
            nextClassCard,
            upcomingClassCard,
            prevClassImageCards,
            featuredSubjectsCard,
        ]
    );
}

export default useHomepage;
