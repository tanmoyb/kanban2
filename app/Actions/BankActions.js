

import AppDispatcher from '../Dispatcher/AppDispatcher';
import bankConstants from'../Constants/constants';


let BankActions = {


// create an account with empty value

createAccount() {

  AppDispatcher.dispatch({
    type:bankConstants.CREATED_ACCOUNT,
    ammount:0
  })
},

// ammount to withdrew

depositIntoAccount(ammount) {

  AppDispatcher.dispatch({
   type:bankConstants.DEPOSITED_INTO_ACCOUNT,
   ammount:ammount

  })


},

withdrawFromAccout(ammount) {
  AppDispatcher.dispatch({
   type:bankConstants.WITHDREW_FROM_ACCOUNT,
   ammount:ammount

  })

}


}


export default BankActions
