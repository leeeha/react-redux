import React, {Component} from 'react';

// Presentational Component 
// �������� ���ӵ��� �ʰ�, ȭ�鿡 ���𰡸� ǥ���ϴ� �� �����ϴ� ������Ʈ 
// ��ǰ���μ� �ٸ� ������ ���� �� �� ����. 
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
