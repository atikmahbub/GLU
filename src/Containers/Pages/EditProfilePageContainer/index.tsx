import React, { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import useMenuList from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import { Async, EditProfilePage, UserType } from '../types';
import UploadImage from './UploadImage';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlInput from '../../../components/Form/FormControlInput';
import EducationCard from './EducationCard';
import { educations } from '../../../data/editProfile';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import PageFooter from '../../../components/PageFooter';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '2.1875rem',
    },
    hiddenLabel: {
        opacity: 0,
    },
    button: {
        paddingTop: '0.6875rem',
        paddingBottom: '0.6875rem'
    }
});

interface IEditProfilePageContainer extends UserType, Async, EditProfilePage {}

const EditProfilePageContainer: FC<IEditProfilePageContainer> = ({ userType, isLoading, profile }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const { values, setValues } = useFormik({
        initialValues: profile,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    useEffect(() => {
        setValues(profile)
    }, [profile])

    console.log(values)

    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <CardsGridContainer>
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container>
                            <TitlePrimary>Edit Profile</TitlePrimary>
                        </Grid>
                    </Grid>
                    <Grid container direction="column">
                        <Grid container className={classes.titleContainer}>
                            <TitlePrimary>Profile Info</TitlePrimary>
                        </Grid>
                        <FormGroup marginBottomVariant={2}>
                            <UploadImage value={values.img} />
                        </FormGroup>
                        <FormGroup marginBottomVariant={2}>
                            <FormControlInput
                                fullWidth
                                id="edit-profile_bio"
                                name="bio"
                                value={values.about}
                                onChange={() => {}}
                                label="Bio"
                                fontSizeVariant={2}
                            />
                        </FormGroup>
                        <FormGroup marginBottomVariant={2}>
                            <Grid className={classes.titleContainer}>
                                <TitlePrimary>Your Details</TitlePrimary>
                            </Grid>
                            <FormGroup>
                                <CardsGrid rows={2}>
                                    <FormControlInput
                                        fullWidth
                                        id="edit-profile_firstname"
                                        name="firstname"
                                        value={values.firstName}
                                        onChange={() => {}}
                                        label="First Name"
                                        fontSizeVariant={2}
                                    />
                                    <FormControlInput
                                        fullWidth
                                        id="edit-profile_lastname"
                                        name="lastname"
                                        value={values.lastName}
                                        onChange={() => {}}
                                        label="Last Name"
                                        fontSizeVariant={2}
                                    />
                                </CardsGrid>
                            </FormGroup>
                            <FormGroup>
                                <FormControlInput
                                    fullWidth
                                    id="edit-profile_email"
                                    name="email"
                                    value={values.email}
                                    onChange={() => {}}
                                    label="Email"
                                    fontSizeVariant={2}
                                />
                            </FormGroup>
                            <FormGroup>
                                <CardsGrid rows={2}>
                                    <FormControlInput
                                        fullWidth
                                        id="edit-profile_code"
                                        name="code"
                                        value={values.phone}
                                        onChange={() => {}}
                                        label="Mobile Number"
                                        fontSizeVariant={2}
                                    />
                                    <FormControlInput
                                        fullWidth
                                        id="edit-profile_phone"
                                        name="phone"
                                        value=""
                                        label="Mobile Number"
                                        onChange={() => {}}
                                        fontSizeVariant={2}
                                        labelClassName={classes.hiddenLabel}
                                    />
                                </CardsGrid>
                            </FormGroup>
                            <FormGroup>
                                <FormControlInput
                                    fullWidth
                                    id="edit-profile_location"
                                    name="location"
                                    value={values.location}
                                    onChange={() => {}}
                                    label="Location"
                                    fontSizeVariant={2}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlInput
                                    fullWidth
                                    id="edit-profile_password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={() => {}}
                                    label="Password"
                                    fontSizeVariant={2}
                                />
                            </FormGroup>
                        </FormGroup>
                        <FormGroup marginBottomVariant={2}>
                            <TitlePrimary>Education</TitlePrimary>
                            <Grid container direction="column">
                                {educations.map((card, index) => (
                                    <EducationCard key={index} {...card} />
                                ))}
                            </Grid>
                            <ButtonPrimary className={classes.button} variant="outlined" outlinedVariant={2}>Add more</ButtonPrimary>
                        </FormGroup>
                        <ButtonPrimary className={classes.button} variant="outlined" outlinedVariant={2}>Save changes</ButtonPrimary>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default EditProfilePageContainer;
