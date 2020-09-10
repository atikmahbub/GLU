import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import PageFooter from '../../components/PageFooter';
import commonImg from '../../Assets/images';
const TutorMyClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const imageMetaDeta = [
        {
            title: (
                <>
                   First look at French for beginners <br /> Language 
                </>
            ),
            subtitle: '4/5',
            img: commonImg.bookredinggirl,
        },
        {
            title: (
                <>
                    Surrealism, a European cultural mo…<br />Art
                </>
            ),
            subtitle: '4/5',
     img: commonImg.frontfacetwogirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    First look at French for beginners  <br /> Language
                </>
            ),
            subtitle: '4/5',
     img: commonImg.bookwritegirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                   Surrealism, a European cultural mo… <br /> Art
                </>
            ),
            subtitle: '4/5',
     img: commonImg.bookreadingboy,
            // img: commonImg.bookredinggirl,

        },

        // two
        {
            title: (
                <>
                    Surrealism, a European cultural mo… <br /> Art
                </>
            ),
            subtitle: '4/5',
     img: commonImg.glasswatergirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                   First look at French for beginners  <br /> Language
                </>
            ),
            subtitle: '4/5',
     img: commonImg.jumpinggirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                   Surrealism, a European cultural mo… <br />Art
                </>
            ),
            subtitle: '4/5',
     img: commonImg.payingpadgirl,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                   First look at French for beginners <br /> Language
                </>
            ),
            subtitle: '4/5',
     img: commonImg.typinggirl,
            // img: commonImg.bookredinggirl,

        },

        // three
        {
            title: (
                <>
                   First look at French for beginners <br />Language
                </>
            ),
            subtitle: '4/5',
     img: commonImg.greentshirtboy,
            // img: commonImg.bookredinggirl,

        },
        {
            title: (
                <>
                    Surrealism, a European cultural mo… <br /> Art
                </>
            ),
            subtitle: '4/5',
             img: commonImg.handonhairgirl,
            // img: commonImg.bookredinggirl,

            
        }
    ];
    return (
        <div className="tutor_myclasses">
            <NavigationMenu menuList={menu}>
                <div className="tutor_myclasses_container">
                    <div className="tutor_myclasses_header">
                        <div className="header_text">
                            <Typography className="tutor_myclasses_text">My Classes</Typography>
                        </div>
                        <div className="record_button">
                            <Typography className="tutor_myclasses_extrasmalltext">Record Class</Typography>
                        </div>
                    </div>
                    <div className="grid_classes_layout">
                        {imageMetaDeta.map(({img,title,subtitle},index)=>(
                                <div className="sec">
                                <img src={img} height="293px" width="100%" className="" alt="" />
    
                                <div className="img_caption">
                                    <Typography className="tutor_myclasses_smalltext">
                                       {title}
                                    </Typography>
                                </div>
                                <div className="star_rating">
                                    
                
                                        <svg
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-star-fill"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <Typography className="tutor_myclasses_xstext">{subtitle}</Typography>
                                    
                             
                                </div>
                            </div>
                        ))}
                        
                        
                        
                    </div>
                    <div className="show_number_container">
                            <Typography className="tutor_myclasses_xxstext">Showing 50 of 50</Typography>
                        </div>
                </div>
                <div className="commonFooter">
                        
                            <PageFooter />
                      
                    
                </div>
            </NavigationMenu>
        </div>
    );
};
export default TutorMyClass;
