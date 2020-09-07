import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
interface props{
    heading?:string;
    subText?:string;
}
const PlayContainer: React.FunctionComponent <props>= ({heading,subText}) => {
    return (
        <>
            <div className="reusable_resources_container">
                <div className="row">
                    <div className="col-md-12 ">
                        <Typography className="reusable_resources_text">{heading}</Typography>
                    </div>
                    <div className="play_section">
                        <div className="col-md-12 ">
                            <Typography className="reusable_resources_text">{subText}</Typography>
                        </div>
                        <div className="col-md-12">
                            <div className="play_container">
                                <div className="playBar">
                                    <div className="playProgress"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="play_text">
                                <div>
                                    <svg
                                        width="1.5rem"
                                        height="2rem"
                                        viewBox="0 0 16 16"
                                        className="bi bi-play-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                    <span className="">Play</span>
                                </div>
                                <div>
                                    <Typography className="">/33</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayContainer;
