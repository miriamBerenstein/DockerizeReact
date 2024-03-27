const cart = [];

export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ('ADDTOCART'): {
            console.log(action);
            let flag = 0;
            state.map((element) => {
                if (element.code == action.product.code) {
                    flag = 1;
                }
            })
            if (!flag) {
                return [...state, action.product];
            }
            return state;
        }

        case ('DELETEFROMCART'): {
            action.product.qty += action.product.cartqty;
            action.product.cartqty = 0;
            state = state.filter((product) => product !== action.product);
            return state;

        }
    }
    return state
};







