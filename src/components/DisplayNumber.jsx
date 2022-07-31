import React, {Component} from 'react';
import store from '../store'; 

export default class DisplayNumber extends Component{
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
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    )
  }
}

