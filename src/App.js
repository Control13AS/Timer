import React, {Component} from 'react';
import TimerApp from './timer';
import TimerForm from './timerForm';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    time: 0,
    name: null,
    id: uuidv4(),    
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
      timerObj: this.state.timerObj.concat({
        id: uuidv4(), 
        time : this.state.time, 
        name : this.state.name,
      })            
    });
    console.log (this.state.timerObj)   
    document.getElementById('setTimer').value = "";
    document.getElementById('setName').value = "";
  }

  renderTimers() {
    return(
      <ul>
        {this.state.timerObj.map(timer => {
          return <TimerApp key={timer.id} time={timer.time} name={timer.name} /> 
        })}
      </ul>
    )
  }
  
  render() {
      return (
    <div className="App">
      <h1>Timer</h1> 
        <TimerForm addTimer={this.addTimer} setTimer={this.setTimer} setName={this.setName} name={this.state.name}/>
        {this.renderTimers()}        
    </div>  
    );
  }
}

export default App;


