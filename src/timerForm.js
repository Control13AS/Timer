// eslint-disable-next-line
import React, {Component} from 'react';

class TimerForm extends React.Component {
    
render () {
    return (
<div>

<form onSubmit={this.props.addTimer}>
    <input id='setTimer' placeholder="Time" onChange={this.props.setTimer}/>
    <input id='setName' type="text" placeholder="Name" onChange={this.props.setName}/>
    <button>Add {this.props.name} Timer</button>             
</form>  

</div>
    );  
}
}

export default TimerForm