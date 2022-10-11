import React from 'react';
import AddOption  from './AddOption';
import { Options } from './Options';
import { Action } from './Action';
import { Header } from './Header';
import OptionModal from './OptionModal';


export class Indecisionapp extends React.Component{
    state={
        option:[],
        selectedOption:undefined
    }
    handleDeleteSelectedOption=()=>
    {
        this.setState(()=>({
            selectedOption:false
        })
        )
    }
    handleDeleteoneOption=(optionToRemove)=>
    {
        this.setState((prevStateValue)=>({option:prevStateValue.option.filter((option)=>{
            return optionToRemove!=option;
        })}));
    }
    handlePick=()=>
    {
        const randomNum=Math.floor(Math.random()* this.state.option.length);
        const optionpick=this.state.option[randomNum];
        this.setState(()=>({
            selectedOption:optionpick
        }))
    }

    handleAddOption=(optionValue)=>
    {
        if(!optionValue){
            return 'Enter Valid Value to add item';
        }
        else if(this.state.option.indexOf(optionValue)>-1){
            return 'This option already exists';
        }
        else{
            this.setState((prevStateValue)=>({option:prevStateValue.option.concat([optionValue]) }));
        }
       
    }
    render()
    {
        const title='Indecision';
        const subtitle='Put your life in the hands of a computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className='container'>
                <Action hasoptions={this.state.option.length>0} handlepick={this.handlePick}/>
                <div className='widget'>
                    <Options value={this.state.option} handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteoneOption={this.handleDeleteoneOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>    
                <OptionModal selectedOption={this.state.selectedOption} handleDeleteSelectedOption={this.handleDeleteSelectedOption}/>
                </div>
            </div>
        )
    }
    //Life Cycle Methods

    //1.class based Component can access below method
    componentDidMount=()=>
    {
        try{
            const json =localStorage.getItem('option');
            const options=JSON.parse(json);
            if(options)
            {
                this.setState(()=>({option:options}));
            }
        }
        catch(e){
            console.log('JSON DATA is invalid');
        }
        
    }

    //2.components trigger this method only when something updates
    componentDidUpdate=(preProps,prevStateValue)=>
    {
        if(prevStateValue.option.length!==this.state.option.length){
            const json =JSON.stringify(this.state.option);
            localStorage.setItem('option',json);
        }
        
    }

    //3 triggers when we move to another component
    // componentWillUnmount()
    // {
    // }



    //handle delete Options
    handleDeleteOptions=()=>
    {
        this.setState(()=>({option:[]}));
    }

    
}
