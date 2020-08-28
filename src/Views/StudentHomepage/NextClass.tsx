import React from 'react';
import { Typography } from '@material-ui/core';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { Link } from 'react-router-dom';

interface props{
    route:string
}
const NextClass: React.FunctionComponent<props> = ({route}) => {
    return (
        <div className="next__class__card">
            <div className="row">
                <div className="col-lg-2">
                    <Typography variant="h3" className="title">
                        Next Class
                    </Typography>
                </div>
                <div className="col-lg-3">
                    <ImageThumbnail image={commonImg.running} />
                </div>
                <div className="col-lg-3 text-align-center">
                    <div className="title__subtitle__card">
                        <Typography className="title">
                            19/07/20 <br /> 9am- 10.15am
                        </Typography>
                        <Typography className="subtitle">75mins</Typography>
                    </div>
                </div>
                <div className="col-lg-3 text-align-center">
                    <Typography className="title">
                        PE. <br /> Creating a running <br /> plan for a 5K race
                    </Typography>
                    <Typography className="subtitle">Harriet Earl</Typography>
                </div>
                <div className="col-lg-1">
                    <Link to={route} className="blue-button">
                        See
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NextClass;
