const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
/// bitta action yaratasiz, bittta action creator resStock(), -

////  iceCream, cheeseCake, chocolateCake

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";

function orderCake(quantity = 1) {
    return {
        type: CAKE_ORDERED,
        payload: quantity
    }
}

function restockCake(quantity = 1) {
    return {
        type: RESTOCK_CAKE,
        payload: quantity
    }
}

const initialState = {
    numOfCakes: 10,
    iceCream: 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        case RESTOCK_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
});


const action = bindActionCreator({ orderCake, restockCake }, store.dispatch);

action.restockCake(2);
action.orderCake(1)

// store.dispatch(orderCake(4))

unsubscribe();