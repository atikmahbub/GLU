import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useDispatch } from 'react-redux';
import { deleteSubjectAPIcall } from '../../Redux/Actions/subjectAction';

interface props{
    onClick: ()=> void;
    subjectList: any;
    setEditData: Function;
}
const FormContainer: React.FunctionComponent<props> = ({ subjectList, setEditData, onClick}) => {
    const dispatch = useDispatch();
    const handleDelete = (data:any)=>{
        dispatch(deleteSubjectAPIcall(data.yearGroup, data.formGroup, data.subjectId))
    }
    const handleEdit = (data:any) => {
        setEditData(data);
        onClick();
    }
    return (
        <CardContainer>
            <div className="subject-container">
                <CardTable
                    filterRender={
                        <div className="subject-form-row  w-100">
                            <FormRow />
                        </div>
                    }
                    showToolbar={true}
                    showPagination={true}
                    columns={[
                        {
                            width: '20%',
                            title: 'Class Groups',
                            field: 'classGroup',
                        },
                        {
                            width: '20%',
                            title: 'Department',
                            field: 'department',
                        },
                        {
                            width: '20%',
                            title: 'Year Group',
                            field: 'yearGroup',
                        },
                        {
                            width: '20%',
                            title: 'Form Group',
                            field: 'formGroup',
                        },
                        {
                            width: '20%',
                            title: 'Teacher',
                            field: 'teacher',
                        },
                        {
                            width: '20%',
                            title: 'Student',
                            field: 'student',
                        },
                        {
                            width: '10%',
                            title: 'Action',
                            field: 'action',
                            render: (rowData:any) => <ActionToolbar editClick={()=>handleEdit(rowData)} deleteClick={()=>handleDelete(rowData)} />,
                        },
                    ]}
                    rowData={subjectList}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
