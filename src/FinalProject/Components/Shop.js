import { useState } from "react";
import { addToCart, deleteFromCart } from "../../Redux/action/cartActions";
import { useSelector, useDispatch } from "react-redux"
import { reduceQty } from "../../Redux/action/reduceQty";
import { increaseQty } from "../../Redux/action/increaseQty";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../../Redux/Reducer/cartReducer";
import { details } from "../../Redux/action/details"



export default function ShowDetails() {

    const products = useSelector((state) => state.productReducer)
    const navigate = useNavigate()
    const [staticModal, setStaticModal] = useState(false);

    const toggleOpen = () => setStaticModal(!staticModal);


    const dispatch = useDispatch()
    return (
        <>
            <div id="navigate" class="btn-group btn-group-lg" role="group" aria-label="...">
                <button type="button" class="btn btn-dark" onClick={() => navigate("/")}>About</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Shop")}>Shop</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Cart")}>Cart</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Payment")}>Payment</button>
            </div>
            <h1 style={{"text-align":" center","color":"red"}}> SHAMING- SHAMES ME!</h1>
            <div id="wraper">
                {products.map((item) => (
                    <>

                        <div class="card" style={{ "width": "18rem" }}>

                            <img class="card-img-top" src={item.img} alt="" />
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">price: {item.price}$ {<span></span>}qty: {item.qty}</p>
                                <button class="btn btn-outline-dark" onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(details(item.code));
                                }}>DETAILS</button>
                                <span> </span>
                                <button class="btn btn-outline-dark" onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(reduceQty(item.code));
                                    dispatch(addToCart(item))
                                }}>ADD TO CART</button>

                            </div>
                        </div>
                    </>
                ))}</div>

        </>
    )
}

