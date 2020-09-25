import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import ColumnsContainer from '../../ColumnsContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import RatingCard from '../../../components/Cards/RatingCard';
import ReviewCard from '../../../components/Cards/ReviewCard';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    button: {
        fontSize: '1.25rem',
        position: 'absolute',
        right: '3.125rem',
        top: '12.3rem',
        zIndex: 1
    },
});

const Reviews: FC = () => {
    const classes = useStyles();
    return (
        <CardsGridContainer rootClassName={classes.root}>
            <ButtonPrimary color="secondary" className={classes.button}>
                Review
            </ButtonPrimary>
            <ColumnsContainer
                leftContent={
                    <ColumnsContainer
                        topBorder={false}
                        leftContent={
                            <Grid container direction="column">
                                <TitlePrimary>
                                    Reviews
                                    <br /> <RatingCard rating="5/5" />
                                </TitlePrimary>
                            </Grid>
                        }
                        rightContent={<ReviewCard />}
                    />
                }
                rightContent={
                    <ColumnsContainer topBorder={false} leftContent={<ReviewCard />} rightContent={<ReviewCard />} />
                }
            />
        </CardsGridContainer>
    );
};

export default memo(Reviews);
