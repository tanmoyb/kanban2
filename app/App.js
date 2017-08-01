


import React, {Component} from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import KanbanBoardContainer from './KanbanBoardContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AppDispatcher from './Dispatcher/AppDispatcher';
import bankConstants from'./Constants/constants';
import BankBalanceStore from './Stores/BankBalanceStore';
import BankActions from './Actions/BankActions';




class App extends Component {
  constructor(){
    super(...arguments);
    BankActions.createAccount();
    this.state = {
      balance: BankBalanceStore.getState()
    }
  }
  componentDidMount() {
    this.storeSubscription = BankBalanceStore.addListener(
      data => this.handleStoreChange(data));
  }

  componentWillUnmount() {
    this.storeSubscription.remove();
  }

  handleStoreChange(){
    this.setState({balance: BankBalanceStore.getState()});
  }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';

  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  render(){
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="Enter Ammount" ref="ammount" />
          <br />
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
      </div>

    );
  }
}
render(<App />, document.getElementById('root'));




//render(<AnimatedShoppingList />, document.getElementById('root'));



















































/*let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  }, {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      }, {
        id: 2,
        name: "Kanban Example",
        done: false
      }, {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];



render(< KanbanBoardContainer />, document.getElementById('root'));*/
