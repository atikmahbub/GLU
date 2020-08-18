import React from 'react';

const Heading: React.FunctionComponent = () => {
    return (
        <>
            <div className="middle__heading">
                <h2>Frank Howard</h2>
            </div>
            <div className="para__box">
                <p>
                    I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business Studies
                    and History.
                </p>
                <p className="subpara">
                    Dubai, UAE
                    <br /> (+971) 4 554 0350 frankhwrd@gmail.com
                </p>
                <p className="edit">Edit profile</p>
            </div>
        </>
    );
};

export default Heading;
