import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  };

  render() {
    let cardDetails;
    console.log("showDetails",this.state.showDetails);
    console.log("toggle",this.props.taskCallbacks);
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks= {this.props.taskCallbacks} />
        </div>
      );
    };
    return (
      <div className="card">
        <div className="card__title" onClick={
          ()=>this.setState({showDetails: !this.state.showDetails})
        }>{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
