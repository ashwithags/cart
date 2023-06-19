import React, { useEffect, useState } from "react";
import img1 from "../Asset/1.png";
import img2 from "../Asset/2.jpg";
import img3 from "../Asset/3.jpg";

const Home=()=>{

    const [quote, setQuote] = useState('');

    const fetchQuote=()=>{
    fetch('https://dummyjson.com/quotes/random')
    .then(data => data.json())
    .then(data =>{
        console.log(data);
        setQuote(data);
    })
    }

    useEffect(()=>{
        fetchQuote();
    },[])

  return(<>
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York" className="d-block w-100"/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container" style={{margin:'50'}}>
    <div className="mt-4 p-5 bg-primary text-white rounded">
  <h1>Quote for the day</h1>
  <h3>{quote.quote}</h3>
  <p style={{float:'right'}}>{quote.author}</p>

</div>
</div>


</>
  )
}

export default Home;
