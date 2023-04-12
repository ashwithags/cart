import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import Categories from "./Categories";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./login";
import Manage from "./Manage";
import Products from "./Products";
import Search from "./Search";
import User from "./User";

const Nav = () => {
    return (
        <>
         <Router>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">My Cart</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/manage">Manage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/login">Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav> 
                
           
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route exact path="/products" element={<Products/>}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                    <Route exact path="/search" element={<Search/>}></Route>
                    <Route exact path="/manage" element={<Manage/>}></Route>
                    <Route exact path="/profile" element={<User/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/contact" element={<Contact/>}></Route>
                </Routes>
            </Router>

        </>
    )
}
export default Nav;