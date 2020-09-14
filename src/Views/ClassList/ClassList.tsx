import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Add, MailOutline } from '@material-ui/icons';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import FormControlSelect from '../../components/Form/FormControlSelect';
import FormControlInput from '../../components/Form/FormControlInput';

const useStyles = makeStyles({
    inputsContainer: {
        marginBottom: '2.1875rem'
    },
    inputRoot: {
        marginRight: '0.625rem'
    }
})

interface props {
    classList?: any[];
}

const ClassList: React.FunctionComponent<props> = ({ classList }) => {
    const classes = useStyles()
    const routes = useHistory();

    const handleToggler = () => {
        routes.push('/dashboard/add-year-group');
    };

    const redirectDetails = (id:number) => {
        routes.push('/dashboard/year-group/details');
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Year Groups"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <Grid container justify="space-between" className={classes.inputsContainer}>
                        <Grid container item xs={6}>
                            <FormControlSelect
                                placeholder="Year Group"
                                value=""
                                options={[]}
                                onChange={() => {}}
                                variant="outlined"
                                rounded
                                rootClassName={classes.inputRoot}
                            />
                            <FormControlSelect
                                placeholder="Form Group"
                                value=""
                                options={[]}
                                onChange={() => {}}
                                variant="outlined"
                                rounded
                            />
                        </Grid>
                        <Grid container justify="flex-end" item xs={6}>
                            <FormControlInput
                                id=""
                                name=""
                                value=""
                                placeholder="Search"
                                onChange={() => {}}
                                variant="outlined"
                                rounded
                                fullWidth={false}
                                icon={<SearchIcon />}
                            />
                        </Grid>
                    </Grid>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '23%',
                                title: 'Group',
                                field: 'group',
                            },
                            {
                                width: '23%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '23%',
                                title: 'Form Groups',
                                field: 'formGroup',
                            },
                            {
                                width: '23%',
                                title: 'Head of Year',
                                field: 'hoy',
                            },

                            {
                                width: '23%',
                                title: 'Action',
                                field: 'action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                    showDetail={true}
                                    detailClick={() => redirectDetails(rowData.id)}
                                    // deleteClick={() => handleDelete(rowData.id)}
                                    // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={[
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                        ]}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default ClassList;
