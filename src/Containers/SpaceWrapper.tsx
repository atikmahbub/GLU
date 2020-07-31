import React from 'react';

interface props {
    children: React.ReactNode;
}
const SpaceWrapper: React.FunctionComponent<props> = ({ children }) => {
    return <div className="spacing">{children}</div>;
};

export default SpaceWrapper;
