const initialState = {
    cartItems: [],
    totalPrice: 0,
  };
  

const updateCart = (state = initialState, action) => {

    console.log(state, action);

    switch (action.type) {
        case 'ADD_TO_CART':
            const { payload } = action;
            const item = state.cartItems?.find(
                product => product.id === payload.id,
            );

            if (item) {
                return {
                    ...state,
                    cartItems: state.cartItems?.map(item => item.id === payload.id
                        ? {
                            ...item,
                            qty: item.qty + 1,
                        }
                        : item
                    ),
                    totalPrice: state.totalPrice + payload.price,
                };
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload],
                    totalPrice: state.totalPrice + payload.price,
                };
            }
        
        case 'REMOVE_FROM_CART': return state;
        default: return state;
    }

}
export default updateCart;

