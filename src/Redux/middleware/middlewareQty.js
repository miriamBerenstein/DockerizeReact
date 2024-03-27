export const addToCartMW = () => next => action => {
    if (action.type == "ADDTOCART") {
        console.log("apply midle ware");
        // console.log(action.code);
        // if(action.user.qty === 0){
        //     action.user.qty = -1;
        // }
    }
    return next(action)
}