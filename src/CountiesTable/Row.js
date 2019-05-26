import React from 'react';
import "semantic-ui-css/semantic.min.css";
const Row = props => {
    const {name, capital, population, flag, subregion} = props;
    return (
        <div className="ui card" >
            <div className="image" onClick={()=>window.open(flag)} >
                    <img src={flag} alt={name}/>
            </div>
            <div className="content" onClick={()=>window.open(`https://en.wikipedia.org/wiki/${name.split(' ').join('_')}`)}>
                <div className="header">{name}</div>
                <div className="Capital">
                    { capital ? `Capital: ${capital}` : ''}
                </div>
                <div className="description">
                    Population: {population}
                </div>
                <div className="description">
                    { subregion ? `Subregion: ${subregion}` : ''}
                </div>
            </div>
        </div>
    );
};

export default Row;
