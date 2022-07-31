import React, {Component} from "react";
import store from '../store'; 
import DisplayNumber from '../components/DisplayNumber';

// Container 컴포넌트 
// 리덕스의 store와 관련된 작업을 모두 처리하는 컴포넌트 
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
        return <DisplayNumber number={this.state.number}></DisplayNumber>
    }
}