import React from 'react';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import IconTextRow from '../../components/IconTextRow';
import { FavoriteBorder, Person, PersonOutline } from '@material-ui/icons';

const SlidingDrawerContent: React.FunctionComponent = () => {
    return (
        <div className="drawer__content">
            <div className="row">
                <div className="col-md-8">
                    <ImageThumbnail image={commonImg.boy} />
                </div>
            </div>
            <div className="image__bottom__content">
                <Typography className="title">Introducing advanced long devision</Typography>
                <div className="icon__text__container">
                    <IconTextRow icon={<FavoriteBorder className="icon" />} title="Favorite" />
                    <IconTextRow icon={<PersonOutline className="icon" />} title="Available slots" />
                </div>
                <div className="time__teacher__container">
                    <Typography className="heading">
                        19/07/20 <br /> 9am- <br /> 10.15am
                    </Typography>
                    <Typography className="heading">
                        Maths <br /> Frankie Smith
                    </Typography>
                </div>
                <div className="chip__container">
                    <Typography className="title">AED250</Typography>
                </div>
                <div className="description__container">
                    <Typography className="title">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. <br /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SlidingDrawerContent;
