import React, { useEffect, useState } from "react";

const Manage = () => {

    const [productDetail, setProductDetails] = useState({});

    const handleChange =(e)=>{
        e.preventDefault();

        const name= e.target.name;
        const value = e.target.value;
        setProductDetails(values => ({...values, [name]: value}))
        
    }

    const addNewProducts = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
           // .then(data => alert("Product with ID " +data.id+ " added"));
    }

    useEffect(()=>{
        addNewProducts();
    },[productDetail]);

    return (
        <>
            <div className="container">
                <h1>Manage</h1>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Add</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Update</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Delete</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div>
                            <h3>Add a Product</h3>
                            <form className="form-inline my-2 my-lg-0" style={{ display: "inline-flex" }}>
                                <input className="form-control mr-sm-2" type="text" placeholder="Title" name="Title" onChange={handleChange} />
                                <input className="form-control mr-sm-2" type="text" placeholder="Description" name="Description" onChange={handleChange} />
                                <input className="form-control mr-sm-2" type="text" placeholder="Price" name="Price"onChange={handleChange} />
                                <input className="form-control mr-sm-2" type="text" placeholder="Discount" name="Discount"onChange={handleChange} />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Add Product</button>
                            </form>
                        </div>
                        </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
            </div>
        </>
    )
}

export default Manage;