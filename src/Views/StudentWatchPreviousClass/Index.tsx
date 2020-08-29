import React, { useState } from 'react';
import SlidingDrawer from '../../components/SlidingDrawer';
import SlidingDrawerContent from '../UpcomingClasses/SlidingDrawerContent';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import SpaceWrapper from '../../Containers/SpaceWrapper';
import VideoDescription from './VideoDescription';
import VideoLectureContainer from '../../components/VideoLectureContainer';
import ClassSummery from './ClassSummery';
import TagContainer from './TagContainer';
import ResourcesContainer from './ResourcesContainer';
import WatchNext from './WatchNext';
import MadeBy from '../Footer/MadeBy';
import { studentMenus } from '../../Helper/studentMenus';

const Index = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
   
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <div className="student__classes__tutor">
            <SlidingDrawer title="Upcoming Class" show={openDrawer} handler={handleDrawer}>
                <SlidingDrawerContent />
            </SlidingDrawer>
            <FixedNavigation>
                <NavigationMenu menuList={studentMenus} handler={handleDrawer} />
            </FixedNavigation>
            <SpaceWrapper>
                <React.Fragment>
                    <div className="video__info__container">
                        <VideoDescription />
                        <VideoLectureContainer />
                        <ClassSummery />
                        <TagContainer />
                        <ResourcesContainer />
                        <WatchNext />
                    </div>
                    <MadeBy />
                </React.Fragment>
            </SpaceWrapper>
        </div>
    );
};

export default Index;
