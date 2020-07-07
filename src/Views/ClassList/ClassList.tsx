import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import FormContainer from './FormContainer';
import AddSection from './AddSection';


interface props{
    triggerModal: ()=> void;
    classList?: any[]
}
const ClassList: React.FunctionComponent<props> = ({triggerModal, classList}) => {
    const [toggler, setToggler] = useState(false);
    const [editSection, setEdtiSection] = useState();
    const handleToggler = () => {
        setToggler(!toggler);
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Year Group"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    trigger={triggerModal}
                />
            </CardContainer>
            <FormContainer setSection={setEdtiSection} classList={classList} onClick={handleToggler}/>
            <AddSection sections={editSection} show={toggler} onClick={handleToggler}/>
        </div>
    );
};

export default ClassList;
