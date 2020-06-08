import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

interface colDataType {
    profile: string;
    name: string;
    class: string;
    id: string;
    action: string;
}
const ParentList: React.FunctionComponent = () => {
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Parents"
                    btnIcon={<Add />}
                    btnTitle="Add Parent"
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '23%',
                                title: 'Profile',
                                field: 'profile',
                                render: (rowData: colDataType) => (
                                    <img src={rowData.profile} style={{ width: 35, height: 35, borderRadius: '50%' }} />
                                ),
                            },
                            {
                                width: '23%',

                                title: 'Parent ID',
                                field: 'parentId',
                            },
                            {
                                width: '23%',

                                title: 'Name',
                                field: 'name',
                            },
                            {
                                width: '23%',

                                title: 'Email',
                                field: 'email',
                            },
                            {
                                width: '23%',

                                title: 'Options',
                                field: 'action',
                                render: () => (<ActionToolbar/>)
                            },
                        ]}
                        rowData={[
                            {
                                profile: commonImg.photo,
                                parentId: '251',
                                name: 'John yeo',
                                email: 'parent@example.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                parentId: '251',
                                name: 'John yeo',
                                email: 'parent@example.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                parentId: '251',
                                name: 'John yeo',
                                email: 'parent@example.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                parentId: '251',
                                name: 'John yeo',
                                email: 'parent@example.com',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                parentId: '251',
                                name: 'John yeo',
                                email: 'parent@example.com',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentList;
