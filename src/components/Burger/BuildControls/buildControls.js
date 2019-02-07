import React from 'react';
import BuildControl from './BuildControl/buildControl';
import './buildControls.css'

const controls =[
    {label: 'SALAD', type: 'salad'},
    {label: 'BACON', type: 'bacon'},
    {label: 'CHEESE', type: 'cheese'},
    {label: 'MEAT', type: 'meat'},
];



const buildControls = (props) => (
    
    <div className="buildcontrols">

    <p><strong>Total Price : Rs {props.price.toFixed(2)}</strong></p>

    {controls.map(ctrl => (
        <BuildControl key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)} 
        disabled={props.disabled[ctrl.type]}
        />
    ))}

    </div>
);

export default buildControls;