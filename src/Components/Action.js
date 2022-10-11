import React from 'react';

export const Action =(props)=>(
    <div>
        <button className='big-button' onClick={props.handlepick} disabled={!props.hasoptions}>What should I do?</button>
    </div>
)