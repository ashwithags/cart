import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [ProductId, setId] = useState(1)

    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => { setProducts(data.products) });
    }

    useEffect(()=>{
        fetchProducts()
    },[]
    )

    const setProductId = (i) =>{
        setId(i);
    }

    return (
        <>
            <div className="container" style={{paddingTop:40}}>
                <div className="row">
                    <Product productId = {ProductId} />
                </div>
                <hr></hr>
                <h3>View All Product</h3>
                <div className="row">
                    <div  style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
                        {products.map((item) => (
                            <div key={item.id}>
                                <div className="card" >
                                    <img src={item.thumbnail} className="card-img-top" alt={item.title} style={{height:"200px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button type="button" onClick={() => setProductId(item.id)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Product</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;