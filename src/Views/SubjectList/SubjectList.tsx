import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { Add, MailOutline } from '@material-ui/icons';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router';
import FormControlInput from '../../components/Form/FormControlInput';
import { Grid, makeStyles } from '@material-ui/core';
import FormControlSelect from '../../components/Form/FormControlSelect';

const useStyles = makeStyles({
    inputsContainer: {
        marginBottom: '2.1875rem',
    },
    inputRoot: {
        marginRight: '0.625rem',
    },
});
interface props {
    subjects: any;
}
const SubjectList: React.FunctionComponent<props> = ({ subjects }) => {
    const classes = useStyles();
    const route = useHistory();
    const handleRoute = () => {
        route.push('/dashboard/class-group/add-class-group');
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Class Groups"
                    btnTitle="New Class Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    btnIcon={<Add />}
                    trigger={handleRoute}
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
                                placeholder="Department"
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
                                icon={<i className="icon-Search_Nav" />}
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
                                width: '40%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '15%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '15%',
                                title: 'Year Group',
                                field: 'yearGroup',
                            },
                            {
                                width: '23%',
                                title: 'Teacher',
                                field: 'teacher',
                            },
                            {
                                width: '23%',
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '23%',
                                title: 'Action',
                                field: 'action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                    // showDetail={true}
                                    // detailClick={() => redirectDetails(rowData.id)}
                                    // deleteClick={() => handleDelete(rowData.id)}
                                    // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={subjects}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default SubjectList;
