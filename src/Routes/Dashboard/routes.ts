import StudentList from '../../Views/StudentList/StudentList';
import AddNewStudent from '../../Views/AddNewStudent/AddNewStudent';
import AddNewTeacher from '../../Views/AddNewTeacher/AddNewTeacher';
import AddNewStaff from '../../Views/AddNewStaff/AddNewStaff';
import AddNewParent from '../../Views/AddNewParent/AddNewParent';
import ParentList from '../../Views/ParentList/ParentList';
import TeacherList from '../../Views/TeacherList/TeacherList';
import StaffList from '../../Views/StaffList/StaffList';
import Dashboard from '../../Views/Dashboard/Dashboard';

export const dashboardRoutes = [
    {pathname:"/dashboard/students", component:StudentList},
    {pathname:"/dashboard/student/add-new-student", component:AddNewStudent},
    {pathname:"/dashboard/student/add-new-teacher", component:AddNewTeacher},
    {pathname:"/dashboard/student/add-new-staff", component:AddNewStaff},
    {pathname:"/dashboard/student/add-new-parent", component:AddNewParent},
    {pathname:"/dashboard/parents", component:ParentList},
    {pathname:"/dashboard/teachers", component:TeacherList},
    {pathname:"/dashboard/Staff", component:StaffList},
    {pathname:"/dashboard", component:Dashboard},
]