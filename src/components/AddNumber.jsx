import React, {Component} from 'react';

// Presentational Component 
// 리덕스에 종속되지 않고, 화면에 무언가를 표시하는 데 집중하는 컴포넌트 
// 부품으로서 다른 곳에서 재사용 할 수 있음. 
export default class AddNumber extends Component{
  state = {size: 1} 
  render(){
    return (
      <div>
        <h1>Add Number</h1>
        
        <input type="button" value="+" onClick={function(){
          this.props.onClick(this.state.size); 
        }.bind(this)}></input>

        <input type="text" value={this.state.size} onChange={function(e){
          this.setState({size:Number(e.target.value)}); 
        }.bind(this)}></input>
      </div>
    )
  }
}
