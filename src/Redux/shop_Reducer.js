const updateCart = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            const { payload } = action;
             const item = state.products?.find(
                 product => product.id === payload.id,
             );

            if (item) {
                return {
                    ...state,
                    products: state.products?.map(item => item.id === payload.id
                        ? {
                            ...item,
                            qty: item.qty + 1,
                        }
                        : item
                    ),
                    discountedTotal: state.discountedTotal + payload.price,
                };
            }
            else{
                return {
                    ...state,
                    products: [...state.products, payload],
                    discountedTotal: state.discountedTotal + payload.price,
                 };
                // console.log(state.products);
                // console.log(...state.products);
                // return { ...state, products: [...state.products, payload] }
            }
        
        case 'REMOVE_FROM_CART': return state;
        default: return state;
    }

}
export default updateCart;

