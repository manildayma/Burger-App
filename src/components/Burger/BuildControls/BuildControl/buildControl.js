import React from 'react';
import '../BuildControl/buildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        
        <button 
        className="More" 
        onClick={props.added}>
        ADD
        </button>
        
        <button
        className="Less"
        onClick={props.removed}
        disabled={props.disabled}>
        REMOVE
        </button>
        
        
       
    </div>
);
export default buildControl;