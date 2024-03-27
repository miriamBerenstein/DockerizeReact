import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";


export default function Payment() {

    const navigate = useNavigate()
    const products = useSelector((state) => state.cartReducer)
    const initialized = useRef(false)
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            alert('ARE YOU SHURE THAT YOU WANT TO PAY?')
        }
    }, [])

    let sum = 0;
    products.forEach((element) => {
        sum += element.price * element.cartqty;
    });
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
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </table>
            <h1>TOTAL: {sum}$</h1>
            <a href="" class="btn btn-outline-dark" >PAY NOW</a>


        </>
    )
}

