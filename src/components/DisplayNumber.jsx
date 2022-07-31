import React, {Component} from 'react';

// Presentational 컴포넌트 
// 리덕스에 종속되지 않고, 다른 곳에서 부품으로 재사용 할 수 있는 컴포넌트 
export default class DisplayNumber extends Component{
  render(){
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly></input>
        {this.props.unit}
      </div>
    )
  }
}