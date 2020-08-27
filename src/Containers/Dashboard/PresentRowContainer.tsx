import React from 'react';

interface props {
    children?: React.ReactNode;
}
const PresentRowContainer: React.FunctionComponent<props> = ({ children }) => {
    return <div className="present_row bg-white">{children}</div>;
};

export default PresentRowContainer;
