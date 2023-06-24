import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import userContext from "../context/userContext";


const Profile = () => {
    const { user, setUser } = useContext(userContext);
    // let [user, setUser] = useState({});

    useEffect(() => {
        (async function () {
            try {
                const userData = JSON.parse(localStorage.getItem('user'))
                const data = await axios.get(`https://dummyjson.com/users/${userData.id}`);
                localStorage.setItem('userinfo', JSON.stringify(data.data));
            }
            catch (err) {
                console.log(new Error(err));
            }
        }())
        setUser(JSON.parse(localStorage.getItem('userinfo')));
    },[])

    return (
        <div>
            {console.log(user.company)}

            {
                user && 
                    <div>
                        <img src={user.image} alt={user.firstName} />
                        <h1>
                            {user.firstName} {user.maidenName ? user.maidenName : user.lastName}
                            {user.maidenName ? user.lastName : null} <span> ({user.company.title})</span>
                        </h1>
                        <p><strong>Company :</strong> {user.company.name}</p>
                        <p><strong>City :</strong> {user.address.city}</p>
                        <p><strong>Age :</strong> {user.age}</p>
                        <p><strong>Gender :</strong> {user.gender}</p>
                        <p><strong>Email :</strong> {user.email}</p>
                        <p><strong>Phone :</strong> {user.phone}</p>
                        <p><strong>BirthDate :</strong> {user.birthDate}</p>
                        <p><strong>BloodGroup :</strong> {user.bloodGroup}</p>
                        <p><strong>Height :</strong> {user.height}cm</p>
                        <p><strong>Weight :</strong> {user.weight}Kg</p>
    
                    </div>
            }
        </div>
    )
}

export default Profile;