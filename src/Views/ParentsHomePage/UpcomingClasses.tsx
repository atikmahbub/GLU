import React from 'react';
import ReusableUpcommingClasses from '../../components/ReusableUpcommingClasses';
import commonImg from '../../Assets/images';

const UpcomingClasses = () => {
    return (
        <div className="parent__upcoming__classes">
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
        </div>

    );
}

export default React.memo(UpcomingClasses);
