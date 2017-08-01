
import React, { Component } from 'react';

class CheckList extends Component {

  checkInputKeyPress(evt){
   if(evt.key === 'Enter'){
     this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
     evt.target.value = '';
   }
 }

  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className="checklist__task">
        <input type="checkbox" defaultChecked={task.done}
        onChange={
        this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, task.Index)
     }

         />
        {task.name}
        <a href="#" className="checklist__task--remove"
        onClick={
           this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, task.Index)
        }
         />
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text"
               className="checklist--add-task"
               placeholder="Type then hit Enter to add a task"
               onKeyPress={this.checkInputKeyPress.bind(this)}  />
      </div>
    );
  }
}

export default CheckList;
