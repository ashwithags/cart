import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import Loading from "../Loading";

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('smartphones');
    const [productId, setProductId] = useState(1);
    const [spinner, setLoading] = useState(true);


    const fetchCategories = () => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            });
    }

    const fetchProductsBasedonCategory = () => {
        fetch('https://dummyjson.com/products/category/' + category)
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }
    
    useEffect(() => {
        fetchCategories();
        fetchProductsBasedonCategory();
    }, [category])

    if(spinner){
        return(
            <Loading />
        )
    }
    return (
        <>
            <div className="container" style={{ marginTop: 30 }}>
                <div className="row">
                <Product productId = {productId} />

                    <div className="col-sm-3">
                        <div >
                            <ul className="list-group">
                                {categories?.map((item, i) => {
                                    return (
                                        <li key={i} className="list-group-item" onClick={() => setCategory(item)}> {i} - {item}</li>
                                    )

                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)' }}>
                            {products.map((item) => (
                                <div key={item.id}>
                                    <div className="card" >
                                        <img src={item.thumbnail} className="card-img-top" alt={item.title} style={{ height: "150px" }} />
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
            </div>
        </>
    )

}
export default Categories;