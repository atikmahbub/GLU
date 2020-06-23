import React, { useState } from 'react';
import { MoreHoriz } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const ActionToolbar: React.FunctionComponent = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <div onClick={handleShow} className="action-container">
            <MoreHoriz />
            <div style={{ display: show ? 'block' : 'none' }} className="action-list">
                <div className="arrow-up"></div>
                <ul>
                    <li>
                        <Button className="edit-btn" fullWidth>
                            Edit
                        </Button>
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
