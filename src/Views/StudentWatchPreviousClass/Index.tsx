import React from 'react';
import SlidingDrawerContent from '../UpcomingClasses/SlidingDrawerContent';
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
    return (
        <NavigationMenu
            menuList={studentMenus}
            menuDrawerWidth="65vw"
            menuDrawerAnimation={false}
            MenuDrawerComponent={<SlidingDrawerContent />}
        >
            <div className="student__classes__tutor">
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
        </NavigationMenu>
    );
};

export default Index;
