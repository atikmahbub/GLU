import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface props{
    handleNext: ()=> void;
    activeCom: number
}
const SaveController: React.FunctionComponent<props> = ({handleNext, activeCom}) => {
    return (
        <div className="controller__bottom">
            <div className="row">
                <div className="col-6">
                    <Typography className="help-support">
                        Read our <Link to=""> Help Guide </Link> for support
                    </Typography>
                </div>
                <div className="col-6">
                    {activeCom <= 1 && (
                        <div className="arrow__container" onClick={handleNext}>
                            <Typography className="text">Save</Typography>
                            <ArrowForward className="icon" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SaveController;
