import React from 'react';
import { Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import commonImg from '../../Assets/images';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
interface props{
    heading?:string;
    subHeading?:string;
    imgSrc?:any;
    linkurl?:string;
}
const TutorMyClass: React.FunctionComponent<props>= ({heading,subHeading,imgSrc,linkurl}) => {
    return (
        <div className="reusableImageRating">
            <div className="sec">
                    <img src={imgSrc}  width='100%' height="300px" style={{objectFit:'cover'}} alt="" />
                <div className="img_caption">
                   <Link style={{textDecoration:'none',color:'black'}} to={linkurl}> <Typography className="tutor_myclasses_smalltext">{heading}</Typography></Link>
                </div>
                <div className="star_rating">
                    <StarRateSharpIcon />
                    <Link style={{textDecoration:'none',color:'black'}} to={linkurl}>  <Typography className="tutor_myclasses_xstext star_pos">{subHeading}</Typography></Link>
                </div>
            </div>
        </div>
    );
};
export default TutorMyClass;
