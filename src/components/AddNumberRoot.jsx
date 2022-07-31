import React, {Component} from 'react';
import AddNumber from "../containers/AddNumber"; // Container·Î ¹Ù²ãÄ¡±â 

export default class AddNumberRoot extends Component{
    render(){
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber></AddNumber>
        </div>
      )
    }
  }
