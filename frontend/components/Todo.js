import React from 'react'

 class Todo extends React.Component {
  render() {
    return (<li>{this.props.todo.name} { this.props.todo.completed?<span>- Completed</span>:<span></span> }</li>)
  }
  
}
 export default Todo