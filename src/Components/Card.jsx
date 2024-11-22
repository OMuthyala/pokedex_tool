import React from 'react';
import '../Style/Card.css';
import Sprites from './Sprites';

export default function Card(props) {
  return (
    <div className="card">
      <Sprites url={props.url} />
      <div className="text">
        {props.pokemon}
      </div>
    </div>
  );
}