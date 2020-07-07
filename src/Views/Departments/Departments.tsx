import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

interface props {
    triggerModal: () => void;
    editDepartment: Function
}
const Departments: React.FunctionComponent<props> = ({triggerModal, editDepartment}) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const departmentList = useSelector((state:any)=> state.schoolReducer.departmentList)
    const redirectDetails = () => {
        routes.push({pathname:'/dashboard/department-details', state:{
            breadcrumb: '/dashboard/department details'
        }})
    }
    const handleDelete = (id:number) => {
        dispatch(deleteAllDepartmentAPIcall(id));
    }
    const handleEdit = (data:any) => {
        editDepartment(data);
    }
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Departments"
                    btnIcon={<Add />}
                    btnTitle="Add department"
                    trigger={triggerModal}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                cellStyle:{width:'10%'},
                                title: 'Id',
                                field: 'id',
                            },
                            {
                                cellStyle:{width:'80%'},
                                title: 'Department',
                                field: 'name',
                            },
                            {
                                title: 'Action',
                                field: 'action',
                                render: (rowData:any) => <ActionToolbar deleteClick={()=>handleDelete(rowData.id)} editClick={()=>handleEdit(rowData)} showDetail={true} detailClick={redirectDetails}/>,
                            },
                        ]}
                        rowData={departmentList ? departmentList : []}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default Departments;
