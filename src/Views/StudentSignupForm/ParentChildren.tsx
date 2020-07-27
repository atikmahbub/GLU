import React from 'react';
import UserDetailsForm from './UserDetailsForm';
import OutlineButton from '../../components/Button/OutlineButton';

interface props{
    handler: ()=> void
}
const ParentChildren: React.FunctionComponent<props> = ({handler}) => {
    return (
        <div className="info__container">
            <UserDetailsForm/>
            <div className="mb-4"></div>
            <OutlineButton text="Add" btnClick={handler}/>
        </div>
    );
}

export default ParentChildren;
