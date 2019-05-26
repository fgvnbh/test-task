import React, {PureComponent} from 'react';
import Row from './Row'
import "semantic-ui-css/semantic.min.css";

class Table extends PureComponent {
    render() {
        const countries = this.props;

        return (
            countries ?
                <div className="ui link cards">
                    {Object.keys(countries).map((key, index) =>
                        <Row key={key._id} num={index + 1} {...countries[key]} />)}
                </div>
                : <img src='https://steemitimages.com/0x0/https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif' align="center" alt="404"/>
        );
    }
}

export default Table;
