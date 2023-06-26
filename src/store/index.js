import { combineReducers, legacy_createStore } from 'redux'

const couterReducer = (state = {coffee: 0, isLoggedIn: false}, action) => {
    if (action.type === 'incrementCoffee'){
        return {
           coffee: state.coffee + 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementCoffee'){
        return {
           coffee: state.coffee - 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increaseCoffee'){
        return {
           coffee: state.coffee + action.number,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            coffee: state.coffee,
            isLoggedIn: true,
         }
    }
    if(action.type === 'logOut'){
        return {
            coffee: state.coffee,
            isLoggedIn: false,
         }
    }
    if (action.type === 'resetCoffeeCalc'){
        return {
           coffee: 0,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'setCoffee'){
        return {
           coffee: +localStorage.getItem("coffee"),
           isLoggedIn: state.isLoggedIn,
        }
    }

    return state
}

const sugarCounterReducer = (state = {sugar: 0, isLoggedIn: false}, action) => {
    


    
    if (action.type === 'incrementSugar'){
        return {
            sugar: state.sugar + 1,
            isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementSugar'){
        return {
            sugar: state.sugar - 1,
            isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increaseSugar'){
        return {
            sugar: state.sugar + action.number,
            isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'resetSugarCalc'){
        return {
           sugar: 0,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'setSugar'){
        return {
            sugar: +localStorage.getItem("sugar"),
           isLoggedIn: state.isLoggedIn,
        }
    }

    return state
}

const rootReducer = combineReducers({
    coffee: couterReducer,
    sugar: sugarCounterReducer,
});


const store = legacy_createStore(rootReducer);

export default store