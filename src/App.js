import React, {Component} from 'react';
import TimerApp from './timer';
import TimerForm from './timerForm';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    time: 0,
    name: null,
    timers: [],     
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
    if (this.state.time === "" && this.state.name ===""){
      console.log('error ""');
    } else if (this.state.time <= 0) {
      console.log('err <=0');
    } else {
      this.setState({        
      timers: this.state.timers.concat({
        id: uuidv4(), 
        time: this.state.time, 
        name: this.state.name,
      }),
      time: "",
      name: "" ,              
    });
    }      
    document.getElementById('setTimer').value = "";
    document.getElementById('setName').value = "";    
  } 

  /*addTimer = (e) => {
    e.preventDefault();
    if (this.state.time === "" && this.state.name ===""){
      console.log('error');
    } else {

      this.setState((prevState) => {
          return {
            timers: this.state.timers.concat({
        id: uuidv4(), 
        time: this.state.time, 
        name: this.state.name,
      }),
      time: prevState.time,
      name: prevState.name,             
    }              
    });
    }      
    //document.getElementById('setTimer').value = "";
    //document.getElementById('setName').value = "";    
  } */

  deleteTimer = (id) => {      
      this.setState({
        timers: this.state.timers.filter(i => i.id !== id)
      });
      console.log(this.state.timers);
  } 

  render() {
      return (
    <div className="App">
      <h1>Timer </h1> 
        <TimerForm addTimer={this.addTimer} setTimer={this.setTimer} setName={this.setName} name={this.state.name}/>
        <ul>
        {this.state.timers.map(timer => {
          return <TimerApp 
          key={timer.id}
          time={timer.time}
          name={timer.name}
          deleteTimer={this.deleteTimer}
          id={timer.id}          
          /> 
        })}
      </ul>
                
    </div>  
    );
  }
}

export default App;


