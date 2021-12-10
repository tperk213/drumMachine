import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from redux-thunk 


//redux stuff

//constants
const PRESSED = 'PRESSED'

//Actions
const press = id => ({type:PRESSED, id});

//Reducers
const initialState=[
  {
    id: 'Q',
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
    title: 'Snare Drum',
    active: false,
  },
  {
    id: 'W',
    audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
    title: 'High Hat',
    active: false, 
  }
  
]

const pads = (state = initialState, action)=>{
  switch(action.type){
    case PRESSED:
      //toogle active
      return state.map(pad => 
          pad.id === action.id ? {...pad, active: !pad.active}: pad
        );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pads,
});
//store

const store = createStore(rootReducer);



//React stuff

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      'q': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')},
      'w': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')},
      'e': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')},
      'a': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')},
      's': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')},
      'd': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')},
      'z': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')},
      'x': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')},
      'c': {status:"inactive", audio: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')},
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keypress', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
    
  }
  componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
    
  }
  handleKeyPress(e){
    if(e.key in this.state){
      this.setState((previousState) =>{
        return(
           {[e.key]: {...previousState[e.key], status: 'active'}}
         );  
      });
      this.state[e.key].audio.pause();
      this.state[e.key].audio.currentTime = 0;
      this.state[e.key].audio.play();
     }
  }

  handleKeyUp(e){
    if(e.key in this.state){
     this.setState((previousState) =>{
        return(
          {[e.key]: {...previousState[e.key], status: 'inactive'}}
        );  
     });     
    }
  }

  handleMouseDown(e){
    this.handleKeyPress({key:e.target.innerHTML.toLowerCase()});
    // setTimeout(this.handleKeyUp, 1000, {key:e.target.innerHTML.toLowerCase()});
  }

  handleMouseUp(e){
    this.handleKeyUp({key:e.target.innerHTML.toLowerCase()});
  }

  render(){
    
    return (
      <div className="App">
        <div id="drum-machine">
            <div id="pad-container">
              <div id="Q" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['q'].status}>Q</div>
              <div id="W" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['w'].status}>W</div>
              <div id="E" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['e'].status}>E</div>
              <div id="A" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['a'].status}>A</div>
              <div id="S" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['s'].status}>S</div>
              <div id="D" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['d'].status}>D</div>
              <div id="Z" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['z'].status}>Z</div>
              <div id="X" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['x'].status}>X</div>
              <div id="C" onTouchStart={this.handleMouseDown} onTouchEnd={this.handleMouseUp} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseUp} className={"noselect pad " + this.state['c'].status}>C</div>
            </div>
        </div> 
      </div>
    );
  }
}

export default App;




// to do
//  seperate the drum pads so that they take a sound and a key in props and an event 
//  
//
