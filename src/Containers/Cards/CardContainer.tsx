import React, { ReactNode } from 'react';

interface cardProps {
    children?: ReactNode;
}
const CardContainer: React.FunctionComponent<cardProps> = ({ children }) => {
    return <div className="card-container">{children}</div>;
};

export default CardContainer;
