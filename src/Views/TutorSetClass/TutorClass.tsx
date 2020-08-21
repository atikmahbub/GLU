import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import ReusableDateTime from './ReusableDateTime';
import MadeBy from '../Footer/MadeBy';
const TutorClass: React.FunctionComponent<props> = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };
    return (
        <div className="tutor_class_container">
            <NavigationMenu menuList={menu} />
            <div className="tutor_class_subcontainer">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="text1">Set Class</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tutor_class_subcontainer_col1">
                            <Typography className="text2">Create and publish an upcoming class.</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutor_class_subcontainer2">
                <div className="row horizontalline"></div>
                <div className="reusableDate">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="date_time">
                                <Typography className="text1">Date and Time</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 border_dateTime">
                            <div className="setDateTime">
                                <ReusableDateTime />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="class_time">
                                <Typography className="text1">Class</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 border_dateTime">
                            <div className="setClass">
                                <div className="row">
                                    <div className="col-md-4">
                                        <SelectFieldUnderline
                                            label="Subject"
                                            value="English"
                                            className="custom-adornment-input-3"
                                            options={['English']}
                                            getValue={() => {}}
                                        />
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <TextField
                                                    className="line-input-3"
                                                    label="No. Of Students"
                                                    fullWidth
                                                    value="25"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <TextField
                                                    className="line-input-3"
                                                    label="Price Per Student"
                                                    fullWidth
                                                    value="AED800"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <TextField
                                            className="line-input-3"
                                            label="Title (45 Characters)"
                                            fullWidth
                                            value=" "
                                        />
                                    </div>
                                    <div className="col-12 w-100">
                                        <div className="description_container">
                                            <Typography className="title">Description</Typography>
                                            <textarea rows={5} className="textbox" />
                                        </div>
                                    </div>
                                    <div className="col-12">Resources</div>

                                    <div className="upload_component">
                                        <div className="upload_button" onClick={handleClick}>
                                            <Typography className="text">Upload</Typography>
                                        </div>
                                        <div>
                                            <Typography className="subtext">Max size (500mb)</Typography>
                                        </div>
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorClass;
