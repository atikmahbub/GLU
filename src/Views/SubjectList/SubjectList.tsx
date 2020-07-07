import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import FormContainer from './FormContainer';
import AddSection from './AddSection';

interface props{
    triggerModal: ()=> void
}
const SubjectList: React.FunctionComponent<props> = ({triggerModal}) => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{backgroundColor:colors.primary}}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Subject"
                    btnTitle="Create Class Group"
                    btnIcon={<Add/>}
                    trigger={triggerModal}
                />
            </CardContainer>
            <FormContainer onClick={handleToggler}/>
            <AddSection show={toggler} onClick={handleToggler}/>
        </div>
    );
};

export default SubjectList;
