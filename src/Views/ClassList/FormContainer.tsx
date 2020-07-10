import React from 'react';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { Button } from '@material-ui/core';
import CardTable from '../../components/Table/CardTable';
import CardContainer from '../../Containers/Cards/CardContainer';
import { useDispatch } from 'react-redux';
import { deleteClassAPIcall } from '../../Redux/Actions/classAction';


interface props{
    onClick: ()=> void;
    classList: any;
    setSection: Function;
}
const FormContainer: React.FunctionComponent<props> = ({onClick, classList, setSection}) => {
    const handleSection = (id:number) => {
        if(classList?.length>0){
            setSection(classList[id])
            onClick()
        }
    }
    const dispatch = useDispatch();
    const handleDelete = (clasname:string) => {
        dispatch(deleteClassAPIcall(clasname));
    }
    return (
        <CardContainer>
            <div className="student-table">
                <CardTable
                    showToolbar={true}
                    showPagination={true}
                    columns={[
                        {
                            width: '20%',
                            title: 'Year',
                            field: 'year',
                        },
                        {
                            width: '20%',
                            title: 'Form Group',
                            field: 'formGroup',
                        },
                        {
                            width: '20%',
                            title: "Teacher's",
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
                            render: (rowData:any) => <ActionToolbar deleteClick={()=>handleDelete(rowData.year)} renderComponent={<li>
                                <Button onClick={()=>handleSection(rowData.rowId)} className="edit-btn" fullWidth>
                                    Section
                                </Button>
                            </li>}/>,
                        },
                    ]}
                    rowData={classList}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
