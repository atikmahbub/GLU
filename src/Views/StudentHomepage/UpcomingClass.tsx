import React from 'react';
import commonImg from '../../Assets/images';
import ReusableUpcommingClasses from '../../components/ReusableUpcommingClasses';

const UpcomingClass: React.FunctionComponent = () => {
    return (
        <ReusableUpcommingClasses
            image={commonImg.twogirl}
            titleClass="Upcomming Class"
            titleLeft={
                <>
                    24/07/20 <br /> 3pm- 4.30pm
                </>
            }
            titleRight={
                <>
                    24/07/20 <br /> 3pm- 4.30pm
                </>
            }
            subtitleLeft="AED200"
            subtitlteRight="AED200"
        />
    );
};

export default UpcomingClass;
