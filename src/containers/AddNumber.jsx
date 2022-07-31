import React, {Component} from "react";
import store from '../store'; 
import AddNumber from "../components/AddNumber"; 

// Presentational 컴포넌트를 감싸서 그대로 출력해주는 Container 컴포넌트  
// 리덕스의 store와 통신하는 역할을 전적으로 담당! 
export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type: 'INCREMENT', size: _size});
        }.bind(this)}></AddNumber>
    }
}
