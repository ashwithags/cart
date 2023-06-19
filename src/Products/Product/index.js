import React, { useEffect, useState } from "react";
import store from "../../Redux/shopestore";
//import { useDispatch } from "react-redux";
import addCartAction from "../../Redux/action";

const Product = (a) => {
    const [product, SetProduct] = useState({});

    const fetchProductDetails = () => {
        console.log(a.productId);
        fetch('https://dummyjson.com/products/' + a.productId)
            .then(res => res.json())
            .then(data => SetProduct(data))
    }

   // const dispatch = useDispatch();

    const addToCart = (event) => {
        event.preventDefault();

        // let action = {
        //     type: 'ADD-TO-CART',
        //     data: product
        // }
        // console.log('clicked')
        // store.dispatch(action);

       store.dispatch(addCartAction(product));

    }

   

    useEffect(() => {
        fetchProductDetails();
    }, [a.productId])

 


    return (
        <div className="container">
{/*             
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{product.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.thumbnail} className="img-fluid rounded-start" style={{ maxHeight: 300 }} alt={product.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-muted">{product.brand} {product.category}</small></p>
                                            <h3>$ {product.price}</h3><h6>{product.discountPercentage}% Off</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;