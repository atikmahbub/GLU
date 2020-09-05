import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import UserTable from '../../components/Dashobard/Table/UserTable';
import { useHistory } from 'react-router';


interface props{
    classList?: any[]
}
const ClassList: React.FunctionComponent<props> = ({classList}) => {
    const [toggler, setToggler] = useState(false);
    const routes = useHistory();

    const handleToggler = () => {
        routes.push('/dashboard/add-year-group')
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Year Group"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    trigger={handleToggler}
                />
            </CardContainer>
            <UserTable
                showFilter={true}
                redirectDetails={(value: any) => {}}
                handleEdit={(value: any) => {}}
                handleDelete={(value: any) => {}}
            />
        </div>
    );
};

export default ClassList;
