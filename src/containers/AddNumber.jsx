import AddNumber from "../components/AddNumber"; 
import {connect} from 'react-redux';

// AddNumber ????? ??? ????
// store? dispatch ??? aciton ??? ???. 
function mapDispatchToProps(dispatch){
    return {
        onClick:function(_size){
            dispatch({type: 'INCREMENT', size: _size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber); 

/*
import React, {Component} from "react";
import store from '../store'; 

export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type: 'INCREMENT', size: _size});
        }.bind(this)}></AddNumber>
    }
}
*/