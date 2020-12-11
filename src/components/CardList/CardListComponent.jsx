import React from 'react';
import './CardListStyles.css';
import { Card } from '../Card/CardComponent.jsx';

export const CardList = (props) => (
    <div className="card-list">
        {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);