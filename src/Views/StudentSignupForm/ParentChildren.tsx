import React from 'react';
import UserDetailsForm from './UserDetailsForm';
import OutlineButton from '../../components/Button/OutlineButton';

const ParentChildren = () => {
    return (
        <div className="info__container">
            <UserDetailsForm/>
            <div className="mb-4"></div>
            <OutlineButton text="Add"/>
        </div>
    );
}

export default ParentChildren;
