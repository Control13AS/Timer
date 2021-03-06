import React, {Component} from 'react';

class TimerApp extends  Component {
    constructor(props){
        super(props);
        this.state = {
            time: props.time,
            name: props.name,
            reset: props.time         
        };
        
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.countDown = this.countDown.bind(this);        
        this.myInterval = null;
        this.removeTimer = this.removeTimer.bind(this);
    }
    
    seconds(time){
        return `0${time%60}`.slice(-2);
    }
    minutes(time){
        return Math.floor(time/60);
    }
    startTimer() {
        if (this.state.time > 0) {
        this.myInterval = setInterval(this.countDown, 1000);
    }
    }
    countDown() {
    if (this.state.time === 0) {        
        this.stopTimer();
        alert('Time is over!')
    } else {
        this.setState((prevState) => {
        return {
    time: prevState.time - 1
        }        
    });

    }
    }
    stopTimer() {
        clearInterval(this.myInterval);
    }
    resetTimer() {
        this.stopTimer();
        this.setState({time: this.state.reset})
    }
    removeTimer() {         
        this.props.deleteTimer(this.props.id);        
    }
    
    render () {
        return (
    <div>        
        <h1>{this.state.name}  {this.minutes(this.state.time)}:{this.seconds(this.state.time)}</h1>
        <button onClick = {this.startTimer}>START</button>
        <button onClick = {this.stopTimer}>STOP</button>
        <button onClick = {this.resetTimer}>RESET</button>
        <button onClick= {this.removeTimer}>DELETE</button>        
    </div>
        );  
}}
export default TimerApp
    


