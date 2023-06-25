import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const [user, setUser] = useState(() => {
        let storage = {}
        if (!localStorage.getItem('user')) {
            console.log('returned');
            return storage
        }
        storage = JSON.parse(localStorage.getItem('user'));;

        return storage;
    });

    let [userinfo, setUserInfo] = useState(
        () => {
            let storage = {}
            if (!localStorage.getItem('userinfo')) {
                console.log('returned');
                return storage
            }
            storage = JSON.parse(localStorage.getItem('userinfo'));;
    
            return storage;
    })

    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id){
            alert("Please Login!")
            navigate('/');
        }
    }, [])

    return (
        <div>
            {console.log(userinfo)}

            {
                userinfo &&
                <div>
                    <img src={userinfo.image} alt={userinfo.firstName} />
                    <h1>
                        {userinfo.firstName} {userinfo.maidenName ? userinfo.maidenName : userinfo.lastName}
                        {userinfo.maidenName ? userinfo.lastName : null} <span> ({userinfo.company.title})</span>
                    </h1>
                    <p><strong>Company :</strong> {userinfo.company.name}</p>
                    <p><strong>City :</strong> {userinfo.address.city}</p>
                    <p><strong>Age :</strong> {userinfo.age}</p>
                    <p><strong>Gender :</strong> {userinfo.gender}</p>
                    <p><strong>Email :</strong> {userinfo.email}</p>
                    <p><strong>Phone :</strong> {userinfo.phone}</p>
                    <p><strong>BirthDate :</strong> {userinfo.birthDate}</p>
                    <p><strong>BloodGroup :</strong> {userinfo.bloodGroup}</p>
                    <p><strong>Height :</strong> {userinfo.height}cm</p>
                    <p><strong>Weight :</strong> {userinfo.weight}Kg</p>
                    <p><strong>University :</strong> {userinfo.university}</p>

                </div>
            }
        </div>
    )
}

export default Profile;