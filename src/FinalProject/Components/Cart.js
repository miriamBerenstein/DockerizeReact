
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../Redux/action/cartActions";
import { reduceQty } from "../../Redux/action/reduceQty";
import { increaseQty } from "../../Redux/action/increaseQty";

export default function ShowCart() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.cartReducer)


    const[qty, setQty] = useState(0);


    const cartDispatch = useDispatch()
    return (
        <>
            <div id="navigate" class="btn-group btn-group-lg" role="group" aria-label="...">
                <button type="button" class="btn btn-dark" onClick={() => navigate("/")}>About</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Shop")}>Shop</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Cart")}>Cart</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Payment")}>Payment</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">TYPE</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">COLOR</th>
                        <th scope="col">QTY</th>
                    </tr>
                </thead>
                <tbody>


                    {products.map((item) => (
                        <>
                            <tr>
                                <td scope="row">{item.type}</td>
                                <td scope="row">{item.price}$</td>
                                <td scope="row">{item.color}</td>
                                <td scope="row">{item.cartqty}</td>
                                <td scope="row">
                                    <button class="btn btn-outline-dark" onClick={(e) => {
                                        e.preventDefault();
                                        cartDispatch(increaseQty(item));
                                        setQty(item.cartqty)
                                    }}>-
                                    </button>
                                    <span>     </span>
                                    <button class="btn btn-outline-dark" onClick={(e) => {
                                        e.preventDefault();
                                        cartDispatch(addToCart(item));
                                        cartDispatch(reduceQty(item.code));
                                        setQty(item.cartqty)
                                    }}>+</button>
                                    <span>   </span>
                                    <button class="btn btn-outline-dark" onClick={(e) => {
                                        e.preventDefault();
                                        cartDispatch(deleteFromCart(item));
                                    }}>DROP</button>
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </table>
            <button class="btn btn-outline-dark" onClick={() => navigate("/Payment")}>TO PAY</button>
        </>
    )
}





