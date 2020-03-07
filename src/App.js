import React, {Component} from 'react';
import Todo from "./Todo";
import './App.css';

class App extends Component {

  state = {
    inputText: '',
    tasks: []
  }

  handleClick =() => {
    if (this.state.inputText.trim() !== '') {
      const tasksList =this.state.tasks;
      tasksList.push(this.state.inputText);
      this.setState({
        tasks: tasksList,
        inputText: ''
      }) 
      console.log(this.state.tasks)
    }
  }
  render (){
  return (
    <div className="App">
      <div>
      <input 
      value={this.state.inputText}
      onChange={(event)=> this.setState({inputText: event.target.value})}/>
      <button onClick={this.handleClick}>myButton</button>
      </div>

      {this.state.tasks.map((item)=>{
        return <Todo to={item}/>
      })}
     
    </div>
  );
}
}

export default App;
