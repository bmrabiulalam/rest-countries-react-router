import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {name, email, phone, image, address, yearlyIncome} = props.user;
    const sectionStyle = {
        border: '1px solid blue', 
        margin: '5%', 
        padding: '3%'
    }
    const userStyle = {
        display: 'flex',
        marginBottom: '10px',
        paddingBottom: '15px',
        borderBottom: '1px solid blue'
    }
    const imageStyle = {height: '250px', marginRight: "20px"};
    const addressString = `Street: ${address['street']}, Suite: ${address["suite"]}, City: ${address["city"]}, Zip Code: ${address["zipcode"]}`;

    return (
        <div style={sectionStyle}>
            <div style={userStyle}>
                <div>
                    <img style={imageStyle} src={image} alt={name + 'photo.'}/>
                </div>
                <div>
                    <h3>Name: {name}</h3>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {addressString}</p>
                    <p>Yearly Income: {yearlyIncome}</p>
                </div>
            </div>
            <div>
                <button onClick={() => props.handleClick(props.user)} style={{border: 'none', cursor: 'pointer', borderRadius: "7px", backgroundColor: 'skyblue', width: '250px', height: '30px'}}><FontAwesomeIcon icon={faUserPlus} /> Add User</button>
            </div>
        </div>
    );
};

export default User;