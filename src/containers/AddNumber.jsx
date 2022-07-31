import React, {Component} from "react";
import AddNumber from "../components/AddNumber";
import store from '../store'; 

// Presentational ������Ʈ�� ���μ� �״�� ������ִ� Container ������Ʈ  
// �������� store�� ����ϴ� ������ �������� ���! 
export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type: 'INCREMENT', size: _size});
        }.bind(this)}></AddNumber>
    }
}
