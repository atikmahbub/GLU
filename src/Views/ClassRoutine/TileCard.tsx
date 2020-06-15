import React from 'react';
import TitleRow from './TitleRow';
import { AccountCircle, Book, QueryBuilder } from '@material-ui/icons';

const TileCard: React.FunctionComponent = () => {
    return (
        <div className="tile-card">
                <TitleRow icon={<Book className="icon" />} title="English" />
                <TitleRow icon={<QueryBuilder className="icon" />} title="10:00AM-11:30AM" />
                <TitleRow icon={<AccountCircle className="icon" />} title="Toni Fadel" />
            </div>
    );
}

export default TileCard;
