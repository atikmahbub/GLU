import React, { memo, useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { commonImg } from '../../Assets/images';
import PropTypes from 'prop-types';

const ProjectCategory = () => {
    const category = ['Chemical bonding', 'Photosynthesis', 'Intertia of motion', 'Basics of java', 'Diffrentiantion & Integration'];
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);
    const [cat, setCat] = useState(null);
    const HandleCategory = (value) => {
        setCat(value); 
    };

    const handleArrowClick = (arrow) => {
        const conent = document.querySelector('#category-cards');
        if (arrow === 'left') {
            let animate = setInterval(() => {
                conent.scrollLeft -= 1;
            }, 5);
            setTimeout(() => {
                clearInterval(animate);
                let isExtremeLeft;
                if (conent.scrollLeft < '4') isExtremeLeft = true;
                setRightArrow(true);
                if (isExtremeLeft) setLeftArrow(false);
            }, 1000);
        } else if (arrow === 'right') {
            let animate = setInterval(() => {
                conent.scrollLeft += 1;
            }, 5);
            setTimeout(() => {
                clearInterval(animate);
                const isExtremeRight = conent.scrollWidth - conent.scrollLeft === conent.clientWidth;
                setLeftArrow(true);
                if (isExtremeRight) setRightArrow(false);
            }, 1000);
        }
    };

    const handleCategoryScroll = (e) => {
        const isExtremeRight = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
        let isExtremeLeft;
        let RightMargin = e.target.scrollWidth - e.target.scrollLeft;
        if (e.target.scrollLeft < 4) isExtremeLeft = true;

        if (e.target.scrollLeft > 198) {
            setLeftArrow(true);
        } else if (RightMargin >= 300) {
            console.log('right true');
            setRightArrow(true);
        }
        console.log(e.target.scrollWidth - e.target.scrollLeft);
        if (isExtremeRight) {
            setRightArrow(false);
        } else if (isExtremeLeft) {
            setLeftArrow(false);
        }
    };

    return (
        <div className="row project-category-wrapper">
            <div className="col-md-12">
                <div className="project-category">
                    <div className="project-category-cards-wrapper">
                        {leftArrow ? (
                            <ArrowBackIos className="slide-control-icon" onClick={() => handleArrowClick('left')} />
                        ) : null}
                        <div className="project-category-selection" id="category-cards" onScroll={handleCategoryScroll}>
                            {category.map((item) => {
                                return (
                                    <div
                                        key={item}
                                        onClick={() => HandleCategory(item)}
                                        className={`project-cat-name ${cat === item ? 'background-primary' : ''}`}>
                                        <img src={commonImg.dummy} />
                                        <Typography>{item}</Typography>
                                    </div>
                                );
                            })}
                        </div>
                        {rightArrow ? (
                            <ArrowForwardIos className="slide-control-icon" onClick={() => handleArrowClick('right')} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
ProjectCategory.propTypes = {
};

export default memo(ProjectCategory);
