import React, { FC, useMemo } from 'react';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import FilterContainer from '../FilterContainer';
import ImageCard from '../../components/Cards/ImageCard';
import CardsGrid from '../CardsGrid';
import CardsGridContainer from '../CardsGridContainer';
import PageFooter from '../../components/PageFooter';
import { cards3, filters, filtersData } from '../../data/filters';

interface ITutorsPageContainer {
    userType: UserTypes;
}

const TutorsPageContainer: FC<ITutorsPageContainer> = ({ userType }) => {
    const menuList = useMemo(() => createMenuList(userType), [userType])
    return (
        <NavigationMenu
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <FilterContainer padding title="Tutors" filters={filters} filtersData={filtersData}>
                <CardsGrid>
                    {cards3.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </FilterContainer>
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <ImageCard
                        bigTitle
                        imgAspectRatio="76%"
                        img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg"
                        title={'Introducing advanced\nlong devision.\nMaths, Sarah Swan'}
                        subTitle="AED200 / 75mins"
                    />
                    <ImageCard
                        bigTitle
                        imgAspectRatio="112%"
                        img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607714/laptopgirl_nmbryo.jpg"
                        title={'Natural selection and\nevolution.\nBiology, Jeff Lee'}
                        subTitle="AED200 / 75mins"
                    />
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer>
                <CardsGrid>
                    {cards3.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <ImageCard
                        bigTitle
                        imgAspectRatio="112%"
                        img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607714/laptopgirl_nmbryo.jpg"
                        title={'Natural selection and\nevolution.\nBiology, Jeff Lee'}
                        subTitle="AED200 / 75mins"
                    />
                    <ImageCard
                        bigTitle
                        imgAspectRatio="76%"
                        img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg"
                        title={'Introducing advanced\nlong devision.\nMaths, Sarah Swan'}
                        subTitle="AED200 / 75mins"
                    />
                </CardsGrid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    )
}

export default TutorsPageContainer