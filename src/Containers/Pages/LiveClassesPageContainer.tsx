import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import FilterContainer from '../FilterContainer';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import { cards2, filters, filtersData } from '../../data/filters';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import CardsGridContainer from '../CardsGridContainer';
import PageFooter from '../../components/PageFooter';

interface ILiveClassesPageContainer {
    userType: UserTypes;
}

const LiveClassesPageContainer: FC<ILiveClassesPageContainer> = ({ userType }) => {
    const menuList = useMemo(() => createMenuList(userType), [userType])

    return (
        <NavigationMenu
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <FilterContainer padding sort={false} title="Live Classes" filters={filters} filtersData={filtersData}>
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </FilterContainer>
            <UpcomingClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607717/earringgirl_vgkxfl.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure narrative in fiction."
                name="Jeff Lee"
                subTitle="AED200"
            />
            <CardsGridContainer>
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <UpcomingClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607717/earringgirl_vgkxfl.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure narrative in fiction."
                name="Jeff Lee"
                subTitle="AED200"
            />
            <CardsGridContainer>
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    )
}

export default LiveClassesPageContainer
