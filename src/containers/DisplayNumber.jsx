import React, {Component} from "react";
import store from '../store'; 
import DisplayNumber from '../components/DisplayNumber';

// Container ������Ʈ 
// �������� store�� ���õ� �۾��� ��� ó���ϴ� ������Ʈ 
export default class extends Component{
    state = {
        number: store.getState().number
    }
    
    // store�� ������ ���� �ٲ� ������ subscribe�� ȣ��Ǿ� UI ����  
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