import React from 'react';
import TitleRow from './TitleRow';

interface props{
    data: any
}
const TileCard: React.FunctionComponent<props> = ({data}) => {
    return (
        <div className="tile-card">
                <TitleRow  title={data.activity} />
                <TitleRow  title={data.time} />
                <TitleRow  title={data.teacher} />
            </div>
    );
}

export default TileCard;
