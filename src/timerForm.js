// eslint-disable-next-line
import React, {Component} from 'react';

class TimerForm extends React.Component {
    
render () {
    return (
<div>

<form onSubmit={this.props.addTimer}>
    <input  type="number" id='setTimer' placeholder="Time" onChange={this.props.setTimer}/>
    <input type="text" id='setName' placeholder="Name" onChange={this.props.setName}/>
    <button>Add Timer</button>             
</form>  

</div>
    );  
}
}

export default TimerForm