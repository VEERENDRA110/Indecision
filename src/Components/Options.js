import React from 'react';
import { Option } from './Option';

export const Options=(props)=>(
    <div>
        <div className='widget-header'> 
        <h3 className='widget-header__title'>Your Options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.value.length==0 && <p className='widget-header__message'>Please add an option to get started!</p>}
        {
            props.value.map( (option,index)=> <Option key={option} optionText={option}
            count={index+1}
            handleDeleteOptions={props.handleDeleteoneOption}/>)
        }
    </div>
)