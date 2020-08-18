import React from 'react';
import commonImg from '../../../Assets/images';
interface props {
    name: string;
    about?: string;
    country?: string;
    contact?: string;
}
const Header: React.FunctionComponent<props> = ({ name, about, country, contact }) => {
    return (
        <>
            <div className="heading">
                <h2>{name}</h2>
            </div>
            <h2 className="profile">Profile Image</h2>
            <img src={commonImg.boyCropped} className="profile__image" />
            <div className="photo__box">
                <p className="instruction">Add a photo to your account</p>
                <button>Upload</button>
                <span className="max">Max size 50MB</span>
            </div>
            <div className="bio__box">
                <p className="bio__heading">Bio</p>
                <p className="bio__detail">
                    I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business Studies
                    and History.
                </p>
            </div>
        </>
    );
};

export default Header;
