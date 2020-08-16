import React, {Component} from 'react';
import TimerApp from './timer';
import TimerForm from './timerForm';

class App extends Component {
  state = {
    time: 0,
    name: null,
    isDisplayed: false,
    timerObj: [],    
  }
  
  setTimer = (e) => {
    this.setState({
        time: e.target.value         
    });    
  }
  setName = (e) => {
    this.setState({
      name:e.target.value
    });
  }  

  addTimer = (e) => {
    e.preventDefault();
    this.setState({      
      timerObj: this.state.timerObj.concat({time : this.state.time, name : this.state.name})      
    });    
  }
  
  render()   {

      return (
    <div className="App">
      <h1>Timer</h1> 
        <TimerForm addTimer={this.addTimer} setTimer={this.setTimer} setName={this.setName} name={this.state.name}/>
        {this.state.timerObj.map((id) => <TimerApp key={id} time={this.state.time} name={this.state.name} />  )}        
    </div>  
    );
  }
}

export default App;


