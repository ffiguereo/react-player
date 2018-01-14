import React from 'react';
import './player-layout.css';

const PlayerLayout = (props) => (
    <section className="PlayerLayout">
        {props.children}
    </section>
)
export default PlayerLayout;