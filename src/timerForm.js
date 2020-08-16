// eslint-disable-next-line
import React, {Component} from 'react';

class TimerForm extends React.Component {
    
render () {
    return (
<div>

<form onSubmit={this.props.addTimer}>
    <input placeholder="Time" onChange={this.props.setTimer}/>
    <input type="text" placeholder="Name" onChange={this.props.setName}/>
    <button>Add {this.props.name}</button>             
</form>  

</div>
    );  
}
}

export default TimerForm