import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import PageFooter from '../../components/PageFooter';
import {Link} from 'react-router-dom';
import commonImg from '../../Assets/images';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
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
                          <Link to="/tutor/record-class" style={{textDecoration:'none',color:'black'}} ><Typography className="tutor_myclasses_extrasmalltext">Record Class </Typography></Link> 
                        </div>
                    </div>
                    <div className="grid_classes_layout">
                        {imageMetaDeta.map(({img,title,subtitle},index)=>(
                                <div className="sec">
                                <img src={img} height="290px" width="100%" alt="" />
    
                                <div className="img_caption">
                                    <Typography className="tutor_myclasses_smalltext">
                                       {title}
                                    </Typography>
                                </div>
                                <div className="star_rating">
                                    
                
                                        <StarRateSharpIcon/>
                                        <Typography className="tutor_myclasses_xstext star_pos">{subtitle}</Typography>
                                    
                             
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
