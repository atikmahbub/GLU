import StudentList from '../../Views/StudentList/StudentList';
import AddNewStudent from '../../Views/AddNewStudent/AddNewStudent';
import AddNewTeacher from '../../Views/AddNewTeacher/AddNewTeacher';
import AddNewStaff from '../../Views/AddNewStaff/AddNewStaff';
import AddNewParent from '../../Views/AddNewParent/AddNewParent';
import ParentList from '../../Views/ParentList/ParentList';
import TeacherList from '../../Views/TeacherList/TeacherList';
import StaffList from '../../Views/StaffList/StaffList';
import Dashboard from '../../Views/Dashboard/Dashboard';
import DailyAttendance from '../../Views/DailyAttendace';
import ClassRoutine from '../../Views/ClassRoutine/ClassRoutine';
import Subject from '../../Views/Subject/Subject';
import SessionList from '../../Views/SessionList';
import StudentClasses from '../../Views/StudentClasses/StudentClasses';
import Departments from '../../Views/Departments/Departments';

export const dashboardRoutes = [
    { pathname: '/dashboard', component: Dashboard },
    { pathname: '/dashboard/students', component: StudentList },
    { pathname: '/dashboard/student/add-new-student', component: AddNewStudent },
    { pathname: '/dashboard/student/add-new-teacher', component: AddNewTeacher },
    { pathname: '/dashboard/student/add-new-staff', component: AddNewStaff },
    { pathname: '/dashboard/student/add-new-parent', component: AddNewParent },
    { pathname: '/dashboard/parents', component: ParentList },
    { pathname: '/dashboard/teachers', component: TeacherList },
    { pathname: '/dashboard/Staff', component: StaffList },
    { pathname: '/dashboard/daily-attendance', component: DailyAttendance },
    { pathname: '/dashboard/class-routine', component: ClassRoutine },
    { pathname: '/dashboard/subjects', component: Subject },
    { pathname: '/dashboard/sessions', component: SessionList },
    { pathname: '/dashboard/classes', component: StudentClasses },
    { pathname: '/dashboard/departments', component: Departments },


];
