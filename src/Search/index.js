import React, { useEffect, useState } from "react";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [product, setProduct] = useState([]);

    const searchForProduct = () => {
        fetch('https://dummyjson.com/products/search?q=' + searchQuery)
            .then(res => res.json())
            .then(data => setProduct(data.products));
    }

    useEffect(() => {
        searchForProduct()
    }, [searchQuery])


    return (
        <>
            <div className="container">
                <h3>Search for a Product</h3>
                <form className="form-inline my-2 my-lg-0" style={{ display: "inline-flex" }} >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </div>

            <hr />
            <div className="container">
                <div className="col-sm-12">
                    {product?.map((product, i) => {
                        return (
                            <div className="container" key={i}>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={product.thumbnail} className="img-fluid rounded-start" style={{ maxHeight: 300 }} alt={product.title} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <p className="card-text"><small className="text-muted">{product.brand} {product.category}</small></p>
                                                <h3>$ {product.price}</h3><h6>{product.discountPercentage}% Off</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )

}
export default Search;