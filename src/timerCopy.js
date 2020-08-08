/*import React, {Component} from 'react';

class TimerApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {time:5};
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.countDown = this.countDown.bind(this);        
        this.myInterval = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
if (this.state.time == 0) {
    clearInterval(this.myInterval);
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
    this.setState({time:5})
}

handleChange = (e) => {
    this.setState({
        time: e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', this.state.time)
    document.getElementById('timerApp').style.display = 'initial';
} 

render () {
    return (
<div>

<form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}/>
            <button>Submit</button>             
            </form>

    <style type='none' id="timerApp">
    <h1>{this.minutes(this.state.time)}:{this.seconds(this.state.time)}</h1>
    <button onClick = {this.startTimer}>START</button>
    <button onClick = {this.stopTimer}>STOP</button>
    <button onClick = {this.resetTimer}>RESET</button>
    </style>
</div>
    );  
}
}

export default TimerApp
*/