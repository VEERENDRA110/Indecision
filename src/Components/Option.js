import React from 'react';

export const Option=(props)=>(
    <div className='option'>
            <p className="option__text">{props.count +'.'} {props.optionText}</p>
            <button className="button button--link" onClick={(e)=>{
                props.handleDeleteOptions(props.optionText)
            }}>remove</button>
    </div>
)