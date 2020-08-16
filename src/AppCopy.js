/*
import React, {Component} from 'react';
import TimerApp from './timer';
import TimerForm from './timerForm';

class App extends Component {
  state = {
    time: 0,
    isDisplayed: false
  }
  
  setTimer = (e) => {
    this.setState({
        time: e.target.value
    });
    
}
  
  displayTimer = (e) => {
    e.preventDefault();
    this.setState({isDisplayed : true})
  }   

  render()   {    
  return (
    <div className="App">
      <h1>Timer</h1> 
        <TimerForm displayTimer={this.displayTimer} setTimer={this.setTimer}/>        
        {this.state.isDisplayed && <TimerApp time={this.state.time}/>}              
    </div>  
  );
}
}

export default App;

*/