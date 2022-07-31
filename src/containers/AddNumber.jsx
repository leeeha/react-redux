import AddNumber from "../components/AddNumber"; 
import {connect} from 'react-redux';

export default connect()(AddNumber); 

/*
import React, {Component} from "react";
import store from '../store'; 

// Container ÄÄÆ÷³ÍÆ®
export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type: 'INCREMENT', size: _size});
        }.bind(this)}></AddNumber>
    }
}
*/