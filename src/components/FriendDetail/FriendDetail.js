import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

const FriendDetail = () => {
    const {id} = useParams(); 
    const [friendDetail, setFriendDetail] = useState({});
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setFriendDetail(data));
    }, []);
    const {name, email, phone, website} = friendDetail;

    return (
        <div style={{textAlign: 'center', margin: '5%', border: '1px solid blue', borderRadius: '20px', padding: '20px'}}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetail;