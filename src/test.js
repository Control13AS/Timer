import React, {Component} from 'react';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {time:0};
    }
        
    componentDidMount() {
        this.setState({time: this.props.time}); 
        console.log(this.props.time);console.log('this.props.time');
        
    }

render () {
    return (
        <div>

        </div>
    );  
}
}

export default Test