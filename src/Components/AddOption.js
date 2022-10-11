import React from 'react';
import ReactDOM from 'react-dom/client';

export default class AddOption extends React.Component
{
    state={
        error:undefined
    };

    // constructor(props){
    //     super(props);
    //     this.FormSubmitted=this.FormSubmitted.bind(this);
        
    // }
    
    FormSubmitted=(e)=>{
        e.preventDefault();
        const option=e.target.elements.objectValue.value;
        const errormessage=this.props.handleAddOption(option);
        this.setState(()=>({error:errormessage}))
        if(!errormessage)
        {
            e.target.elements.objectValue.value='';
        }
    }
    
    render()
    {
        return(
            
                <div>
                    {
                        this.state.error && <p className='add-option--Error'>{this.state.error}</p>
                    }
                    <form className='add-option' onSubmit={this.FormSubmitted}>
                        <input className='add-option__input' name='objectValue' type='text'></input>
                        <button className='button'>Add Option</button>
                    </form>
                </div>
            
        )
    }
}