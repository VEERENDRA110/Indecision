
//JSX - JavaScript XML
// var template=React.createElement("h1", {id:"someid"}, "This is JSX from App.JS!");
// var template=(
// <div>
//     <h1>Indecision App!</h1>
//     <p>This is Some Info</p>
//     <ol>
//         <li> Item One</li>
//         <li> Item Two</li>
//         <li> Item Three</li>
//     </ol>
// </div>
// );
// var appRoot=document.getElementById('app');
// ReactDOM.render(template,appRoot);

//challenge 1:

// let user={
//     userName:'Veerendra L Nayak',
//     age:26,
//     userLocation:'Bangalore'
// }

// function getLocation(Location)
// {
//     if(Location)
//         return <p>Location: {Location}</p>
// }

// var templateTwo=(
//     <div>
//     <h1>{user.userName?user.userName:'Anonymous'}</h1>
//     {(user.age && user.age>=18) && <p>Age:{user.age}</p>}
//     {getLocation(user.userLocation)}
//     </div>
//     );

// var root=document.getElementById('app');
// ReactDOM.render(templateTwo,root);




//Challenge 2

// var book={
//     title:'Design Patterns',
//     subtitle:'Repository Pattern'
// }

// var output=(
//     <div>
//         <h1>Title: {book.title}</h1>
//         <h3>Subtitle: {book.subtitle}</h3>
//     </div>
// );

// var root =document.getElementById('app')
// ReactDOM.render(output,root);


// //challenge -3

// const output={
//     Title:'Software Developer',
//     Subtitle:'.Net Developer',
//     options:[10,20,30,40,50]
// }

// const sqaure=(x)=>x**x;
// const template=(
// <div>
//     {output.Subtitle && <p>Subtitle: {output.Subtitle}</p>}
//    <p>{output.options.length>0?"Here are your options":"No Options"}</p>
//    <h1>{sqaure(3)}</h1>
// </div>
// );

// const root =document.getElementById('app')
// ReactDOM.render(template,root);



//challenge 4

// const fullName='Veerendra L Nayak';
// const user={
//   name:'Veerendra',
//   cities:['Udupi','Bangalore','Kundapura'],
//   printplaces(){
//       this.cities.forEach(city=>{
//          alert(this.name+ 'Has lived in '+city);
//       });
//   }
// };

// user.printplaces();
// const getFirstName=(name)=> name.split(' ')[0];
// const template=(
// <div>
//    <h1>{(getFirstName(fullName)).toUpperCase()}</h1>
// </div>
// );


// const output={
//        Title:'Software Developer',
//        Subtitle:'.Net Developer',
//        options:[10,20,30,40,50],
//        printDetails()
//        {
//          return this.options.map((x)=>'\n'+this.Title +' is having package of'+x );
//        }
//    };

//    alert(output.printDetails())
//    const template=(
//       <div>
//          <h1>{output.Title}</h1>
//       </div>
//       );

// const root =document.getElementById('app')
// ReactDOM.render(template,root);


// const multiplier={
//   numbers:[10,20,30,40,50],
//   multiplyBy:2,
//   multiply()
//   {
//    return this.numbers.map((number)=>'\n'+ number * this.multiplyBy );
//   }
// };

// console.log(multiplier.multiply());

// const template=(
//          <div>
//             <h1>{multiplier.multiply()}</h1>
//          </div>
//          );
   
//    const root =document.getElementById('app')
//    ReactDOM.render(template,root);


// const root =document.getElementById('app')
// const output={
//        Title:'Software Developer',
//        Subtitle:'.Net Developer',
//        options:[]
//    }

//    const onFormSubmit=(e)=>{
//      e.preventDefault();
//      const option=e.target.elements.option.value;
//      if(option)
//      {
//       output.options.push(option);
//       e.target.elements.option.value='';
//       renderView();
//      }
//    };

//    const remove=()=>{
//       output.options=[];
//       renderView();
//    }

  

//    const renderView=()=>{
//       const template=(
//       <div>
//       {output.Subtitle && <p>Subtitle: {output.Title}</p>}
//      <p>{output.options.length>0?"Here are your options":"No Options"}</p>
//      <ol>
//      {
//       output.options.map((option)=>{
         
//          return <li key={option}>{option}</li>;
//       })
//      }
//      </ol>
     
//      <form onSubmit={onFormSubmit}>
//      <input type="text" name="option"/>
//      <button>Add Options</button>
//      <button onClick={remove}>Remove All</button>
//      </form>
//   </div>
//   );
//     ReactDOM.render(template,root);
//    }


//    renderView();







// //Events --Counter

// let counter=0;
// const someId='someid';
// var root=document.getElementById('app');
// const  addOne =() =>
// {
//    counter++;
//    renderView();
   
// };

// const  subtractone =() =>
// {
//    if(counter<=0)
//    {

//    }
//    else{
//       counter--;
//    }
   
//    renderView();
   
// };

// const  reset =() =>
// {
//    counter=0;
//    renderView();
   
// };

// const renderView=()=>{
//    var templateTwo=(
//       <div>
//       <h1>Counter: {counter}</h1> 
//       <button onClick={addOne}>+1</button>
//       <button onClick={subtractone}>-1</button>
//       <button onClick={reset}>Reset</button>
//       </div>
//       );
//       ReactDOM.render(templateTwo,root);
// };

// renderView();





// //Counter 

// class Counter extends React.Component{
//    constructor(props)
//    {
//       super(props);
//       this.addOne=this.addOne.bind(this);
//       this.subtractone=this.subtractone.bind(this);
//       this.reset=this.reset.bind(this);
//       this.state={
//          counter:0
//       };
//    }
//    addOne()
//    {
//       this.setState((prevStateValue)=>{
//          return{
//             counter:prevStateValue.counter+1
//          };
//       });
      
//    }

//    subtractone()
//    {
//       if(this.state.counter<=0)
//       {

//       }
//       else{
//          this.setState((prevStateValue)=>{
//             return{
//                counter:prevStateValue.counter-1
//             };
//          });
//       }
      
      
//    }

//    reset()
//    {
//       this.setState(()=>{
//          return{
//             counter:0
//          };
//       });
      
//    }
//    render(){
//       return(
//          <div>
//             <h1>Count:{this.state.counter}</h1>
//             <button onClick={this.addOne}>+1</button>
//             <button onClick={this.subtractone}>-1</button>
//             <button onClick={this.reset}>Reset</button>
//          </div>
//       )
//    }
// }

// ReactDOM.render(<Counter/>,document.getElementById('app'));








//Visibility

// class Visibility extends React.Component
// {
//    constructor(props)
//    {
//       super(props);
//       this.toggleVisibility=this.toggleVisibility.bind(this);
//       this.state={
//          Visibility:false
//       };
//    }
//    toggleVisibility(){
     
//       this.setState((previousValue)=>
//       {
//          return{
//             Visibility:!previousValue.Visibility
//          };
         
//       });
//    }
//    render(){
//       return (
//          <div>
//             <h1>Visibility</h1>
//             <button onClick={this.toggleVisibility}>{this.state.Visibility? 'Hide Details':'Show Details'}</button>
//             {this.state.Visibility &&(
//                   <div>
//                      <p>Hey. These are some details you can see!</p>
//                   </div>
//             )}
//          </div>
//       )
   
//    };
// }


// ReactDOM.render(<Visibility />,document.getElementById('app'));


