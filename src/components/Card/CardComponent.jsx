import React from 'react';
import './CardStyles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img className='' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt= {`${props.monster.name}`} />
        <h2>{ props.monster.name }</h2>
        <p>{props.monster.email}l</p>
    </div>
)