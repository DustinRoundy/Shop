import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    selectedProduct: selectedProductReducer,
    account: accountReducer,
    categories: categoryReducer,
});

function findProductIndex(products, action) {
    return products.findIndex(
        (t) => t.id === action.product_id
    );
}

// function reducer(state, action) {
//     if (action.type === 'SET_PRODUCTS') {
//         return {
//             products: action.products,
//         };
//     } else if (action.type === 'DELETE_MESSAGE') {
//         return {
//             messages: [
//                 ...state.messages.slice(0, action.index),
//                 ...state.messages.slice(
//                     action.index + 1, state.messages.length
//                 ),
//             ],
//         };
//     } else {
//         return state;
//     }
// }

function productReducer(state = [], action){
    switch(action.type){
        case 'SET_PRODUCTS': {
            return action.products;
        }
        default: {
            return state;
        }
    }
}
function categoryReducer(state = [], action){
    switch(action.type){
        case 'SET_CATEGORY': {
            return action.categories;
        }
        default: {
            return state;
        }
    }
}
//
// function searchReducer(state, action){
//     switch(action.type){
//         case 'SEARCH':
//             console.log('something');
//             break;
//         default: {
//             return state;
//         }
//     }
//
// }

function cartReducer(state = [], action){
    switch(action.type){
        case 'ADD_CART': {
            const productIndex= findProductIndex(state, action);
            if(productIndex !== -1){
                const oldCart = state;
                if(oldCart[productIndex].quantity < 6){
                    oldCart[productIndex].quantity++;
                    // let newCart = (state[productIndex].quantity = action.quantity);
                    return oldCart;
                }
            }else{
                const product = Object.assign(action.product, {quantity: 1});

                const newCart = [...state, product];
                return newCart;
            }
            break;


        }
        case 'REMOVE_CART': {
            const productIndex = findProductIndex(state, action);

            return [
                ...state.slice(0, productIndex),
                ...state.slice(
                    productIndex + 1, state.length
                ),
            ];
        }
        case 'UPDATE_CART':
            console.log('update cart');
            const productIndex = findProductIndex(state, action);
            const oldCart = state;
            oldCart[productIndex].quantity = action.quantity;
            // let newCart = (state[productIndex].quantity = action.quantity);
            return oldCart;
        default: {
            return state;
        }
    }
}

function selectedProductReducer(state = {}, action){
    switch(action.type){
        case 'SELECT_PRODUCT':
            return action.product;
        default: {
            return state;
        }
    }
}

// function findProductById(state, action){
//     console.log(state, 'find product');
// }

function accountReducer(state = '', action){
    switch(action.type){
        case 'LOGIN':
            return action.username;
        default: {
            return state;
        }
    }
}

// function addCart(id) {
//     return {
//         type: 'ADD_CART',
//         id: id,
//     }
// }
//
// const mapDispatchToCartProps = (dispatch) => (
//     {
//         onCartClick: (id) => (
//             dispatch(addCart(id))
//         ),
//         dispatch: dispatch,
//     }
// );

const store = createStore(reducers);

export default store