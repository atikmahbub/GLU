import React from 'react';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import AttendenceRow from '../../../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../../../components/Dashobard/UserDetails/PresentRow';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import commonImg from '../../../../Assets/images';
import TableUserProfile from '../../../../components/Dashobard/TableUserProfile';
import CardTable from '../../../../components/Table/CardTable';
import ActionToolbar from '../../../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router';

const Index = () => {
    const routes = useHistory();
    const redirectDetails = () => {
        routes.push('/dashboard/teacher-details/class-group-details/perticular');
    };
    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title="Attendace"
                subtitle=" Mr.John - Classes - Year 8 B"
                buttonText="Print"
                linkTo="/dashboard"
            />
            <AttendenceRow />
            <PresentRow />
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    <div className="p-4 bg-white">
                        <div className="student-table">
                            <div className="table__container">
                                <CardTable
                                    showToolbar={false}
                                    showPagination={true}
                                    selectable={false}
                                    tableHeight="100vh"
                                    columns={[
                                        {
                                            width: '60%',
                                            title: 'Name',
                                            field: 'name',
                                            render: (rowData: any) => (
                                                <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                            ),
                                        },
                                        {
                                            width: '18%',
                                            title: 'Student ID',
                                            field: 'studentId',
                                        },
                                        {
                                            width: '18%',
                                            title: 'Attendance',
                                            field: 'attendance',
                                        },
                                        {
                                            width: '18%',
                                            title: 'Punctuality',
                                            field: 'punctuality',
                                        },
                                        {
                                            width: '23%',

                                            render: (rowData: any) => (
                                                <ActionToolbar
                                                    showDetail={true}
                                                    detailClick={() => redirectDetails()}
                                                    // deleteClick={() => handleDelete(rowData.id)}
                                                    // editClick={() => handleEdit(rowData)}
                                                />
                                            ),
                                        },
                                    ]}
                                    rowData={[
                                        {
                                            name: 'Jenny Smith',
                                            studentId: 'XC9382',
                                            profile: commonImg.photo,
                                            punctuality: '56%',
                                            attendance: '56%',
                                        },
                                        {
                                            name: 'Shehan Abeysinghe',
                                            studentId: 'XC9382',
                                            profile: commonImg.photo,
                                            punctuality: '56%',
                                            attendance: '56%',
                                        },
                                        {
                                            name: 'Gemma Abigail Holmes',
                                            studentId: 'XC9382',
                                            profile: commonImg.photo,
                                            punctuality: '56%',
                                            attendance: '56%',
                                        },
                                        {
                                            name: 'Gwanda Betty Cooper',
                                            studentId: 'XC9382',
                                            profile: commonImg.photo,
                                            punctuality: '56%',
                                            attendance: '56%',
                                        },
                                        {
                                            name: 'Jenny Smith',
                                            studentId: 'XC9382',
                                            profile: commonImg.photo,
                                            punctuality: '56%',
                                            attendance: '56%',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserDetailsWrapper>
    );
};

export default Index;
