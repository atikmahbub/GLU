import React, { useState } from 'react';
import { MoreHoriz } from '@material-ui/icons';
import { Button } from '@material-ui/core';

interface props {
    detailClick?: () => void;
    showDetail?: boolean;
}
const ActionToolbar: React.FunctionComponent<props> = ({ detailClick, showDetail }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const handleHide = () => {
        setShow(false);
    };
    return (
        <div onMouseLeave={handleHide} onClick={handleShow} className="action-container">
            <MoreHoriz />
            <div style={{ display: show ? 'block' : 'none' }} className="action-list">
                <div className="arrow-up"></div>
                <ul>
                    {showDetail && (
                        <li>
                            <Button onClick={detailClick} className="edit-btn" fullWidth>
                                Details
                            </Button>
                        </li>
                    )}
                    <li>
                        <Button fullWidth>Edit</Button>
                    </li>
                    <li>
                        <Button className="delete-btn" fullWidth>
                            Delete
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ActionToolbar;
