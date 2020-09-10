import React, { ReactNode } from 'react';

interface cardProps {
    children?: ReactNode;
    mb?:string
}
const CardContainer: React.FunctionComponent<cardProps> = ({ children, mb }) => {
    return <div className={`card-container ${mb}`}>{children}</div>;
};

export default CardContainer;
