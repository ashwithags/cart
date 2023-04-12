import React, { useEffect, useState } from "react";

const User = () => {

    const [user, SetUser] = useState({});

    useEffect(() => {
        fetchUserDetails();
    }, [])

    const fetchUserDetails = () => {
        fetch('https://dummyjson.com/users/76')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                SetUser(data);
            })
    }

    return (
        <>
            {/* <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src={user.image} alt="Card" />
                <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title">{user.firstName} {user.maidenName} {user.lastName}</h4>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.phone}</p>
                    <p className="card-text">{user.gender}</p>
                    <p className="card-text">{user.birthDate}</p>
                 <p className="card-text">{user.company.address.address}</p> 
                    <p className="card-text">{user.university}</p>

                </div>
            </div> */}
            <div className="card" style={{width:"500"}}>
            <img className="card-img-top" src={user.image} alt="Card" />
  <div className="card-img-overlay">
  <h4 className="card-title">{user.firstName} {user.maidenName} {user.lastName}</h4>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.phone}</p>
                    <p className="card-text">{user.gender}</p>
                    <p className="card-text">{user.birthDate}</p>
                    {/* <p className="card-text">{user.company.address.address}</p> */}
                    <p className="card-text">{user.university}</p>
  </div>
</div>
        </>
    )

}

export default User;