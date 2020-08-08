// eslint-disable-next-line
import React, {Component} from 'react';

class TimerForm extends React.Component {
    
render () {
    return (
<div>

<form onSubmit={this.props.displayTimer}>
    <input onChange={this.props.setTimer}/>
    <button>SubmitForm</button>             
</form>  

</div>
    );  
}
}

export default TimerForm