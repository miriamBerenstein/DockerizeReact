
export const addToCart = (product) => {
    return {
        type: 'ADDTOCART',
        product 
    }
};

export const deleteFromCart = (product) => {
    return {
        type: 'DELETEFROMCART',
        product 
    };
};

export const addPay = (product) => {
    return {
        type: 'ADDPAY', 
        product
    }
}

export const reducePay = (product) => {
    return {
        type: 'REDUCEPAY', 
        product
    }
}
