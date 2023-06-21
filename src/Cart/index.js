import React, { useEffect, useState } from "react";
import store from "../Redux/shopestore";

const Cart = () => {

    const [cart, setCartcart] = useState({});

    // const fetchCartcart = () => {
    //     fetch('https://dummyjson.com/carts/1')
    //         .then(res => res.json())
    //         .then(res => setCartcart(res))
    // }

    // //const UpdateCartUsingRedux = data => ({type:'UPDATE_CART',data:data});

    useEffect(() => {
     //   fetchCartcart();
        setCartcart(store.getState());
    }, []);


   console.log("data from store",store.getState());
   //setCartcart(store.getState());
   //console.log(cart);

    return (
        <>
            <div className="container" style={{margin:'30px'}}>
                <div className="row">
                    <div className="col-sm-9">
                        {cart.products?.map((product) => { return(
                            <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="card-body" key={product.id}>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><small className="text-muted">{product.brand} {product.category}</small></p>
                                        <h6>$ {product.price}</h6>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <p className="card-text">Qty:{product.quantity}</p>
                                </div>
                                <div className="col-md-4">
                                <h6 className="card-text">${product.total}</h6><h6>{product.discountPercentage}% Off</h6>
                                <h5 className="card-text">${product.discountedPrice}</h5>
                                </div>
                            </div>
                        </div>
                      )  })}
                    </div>
                    <div className="col-sm-3">
                    <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h4>PRICE DETAILS</h4>
                                        <h5 className="card-title">Price: ({cart.totalProducts} items): $ {cart.total}</h5>
                                        <p className="card-text">Total Qty: {cart.totalQuantity}</p>
                                        <hr/>
                                        <h4>Total Amount: $ {cart.discountedTotal}</h4>
                                        <hr/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Cart;