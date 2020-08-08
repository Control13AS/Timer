import React, {Component} from 'react';
import TimerApp from './timer';
import TimerForm from './timerForm';
import Test from './test';

class App extends Component {
  state = {
    time: 0
  }
  
  setTimer = (e) => {
    this.setState({
        time: e.target.value
    });
    
}

  timeSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', this.state.time);
    if (this.state.time > 0) {
    document.getElementById('timerApp').style.display = 'initial';    
    };   
}   

  render() {
    const time = this.state.time;
    let myTimer = null;
    if (this.state.time > 0) {      
      myTimer = <TimerApp time={this.state.time}/>
    } 
  return (
    <div className="App">
      <h1>Timer</h1> 
        <TimerForm timeSubmit={this.timeSubmit} setTimer={this.setTimer}/>        
        {myTimer}
        
        <Test time={this.state.time} />        
    </div>  
  );
}
}

export default App;


