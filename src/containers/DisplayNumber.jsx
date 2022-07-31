import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

// connect는 DisplayNumber 컴포넌트를 래핑한 컴포넌트를 리턴함.  
export default connect()(DisplayNumber);

/*
import React, {Component} from "react";
import store from '../store'; 

// Container 컴포넌트
export default class extends Component{
    state = {
        number: store.getState().number
    }
    
    // store의 데이터 값이 바뀔 때마다 subscribe가 호출되어 UI 갱신  
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number: store.getState().number});
        }.bind(this));
    }

    render(){
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}
*/