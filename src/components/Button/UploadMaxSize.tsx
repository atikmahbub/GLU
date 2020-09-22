import React, { useState } from 'react';
import OutlineButton from './OutlineButton';
import { Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStlyes = makeStyles({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '18rem',
        marginTop: '2rem',
    },
    maxSize: {
        fontSize: '1rem',
        color: colors.black,
        marginLeft: '1rem'
    },
});

interface props {
    onClick: (file: File) => void;
}

const UploadMaxSize: React.FC<props> = ({ onClick }) => {
    const classes = useStlyes();
    const [filename, setFilename] = useState<File>();
    const [showTitle, setShowTitle] = useState('Max file size 5MB');
    const input = React.useRef<HTMLInputElement>(null);
    const triggerInput = () => {
        if (null !== input.current) {
            input.current.click();
        }
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const totalFile = (e.target as HTMLInputElement).files;
        if (totalFile) {
            console.log();
            setFilename(totalFile[0]);
            if (+(totalFile[0].size / (1024 * 1024)).toFixed(0) > 3) {
                setShowTitle('File size exceded');
            } else {
                onClick(totalFile[0]);
                setShowTitle(totalFile[0].name);
            }
        }
    };
    return (
        <div className={classes.parent}>
            <input
                accept="image/png, image/jpeg, image/png, image/jpg"
                style={{ display: 'none' }}
                id="contained-button-file"
                onChange={handleFile}
                type="file"
                ref={input}
            />
            <label htmlFor="contained-button-file" style={{ marginBottom: 0 }}>
                <OutlineButton text="Upload" btnClick={triggerInput} />
            </label>
            <Typography className={classes.maxSize}>{showTitle}</Typography>
        </div>
    );
};

export default UploadMaxSize;
