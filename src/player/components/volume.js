import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import './volume.css';

const Volume = (props) => (
    <button className="Volume">
        <VolumenIcon
            color="white"
            size={25}
        />
        <div className="Volume-range">
            <div className="Volume-clear"/>
            <div className="Volume-input">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.onChange}
                />
            </div>
        </div>
    </button>
)

export default Volume;