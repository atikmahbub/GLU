import React from 'react';
import { Typography} from '@material-ui/core';
import ResourcesTableComponent from './ResourcesTableComponent'
import PlayContainer from './PlayContainer'
interface props{
    heading?:string;
    subHeading1?:string;
    subHeading2?:string;
    subText2?:string;
    isDivider?:boolean;
    resourcesArray?:[]
}
const PlayBanner: React.FunctionComponent <props>= ({heading,subHeading1,subHeading2,subText2,isDivider,resourcesArray}) => {
    return (
        <>
            <div className="reusable_play_banner">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <Typography className="leftText">{heading}</Typography>
                            </div>
                            <div className="col-md-6 p-0 borderLineMain">
                                <div className="resources_container">
                                    <div className="row">
                                        <div className="col-6 p-0">
                                            <div className="resources_container_1">
                                                <div className="col-md-12">
                                                    <Typography className="resources_text">{subHeading1}</Typography>
                                                </div>
                                                {
                                                resourcesArray?.map((val,index)=>(
                                                    <ResourcesTableComponent key={index} title={val.title} subtitle={val.subtitle}/>
                                                ))}
                                                
                                                {/* <ResourcesTableComponent/> */}
                                            </div>
                                        </div>
                                        <div className="col-6 p-0 borderLine">
                                            <div className="resources_container_2">
                                                <PlayContainer
                                                    heading={subHeading2}
                                                    subText={subText2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {isDivider &&<div className="col-12 horizontalline_new"></div> }
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default PlayBanner;
