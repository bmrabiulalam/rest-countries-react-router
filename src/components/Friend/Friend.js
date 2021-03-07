import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        borderRadius: '20px',
        padding: '20px',
        margin: '20px'
    }

    return (
        <div style={friendStyle}> 
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {/*One Way to link to a route by using Link Component: <p><Link to={`/friend/${id}`}><button>About Friend</button></Link> </p> */}
            {/*One Way to link to a route by using Link Component (variant): <p><Link to={`/friend/${id}`}>About Friend</Link> </p> */}
            {/*Other Way to link to a route by using history hook and event handler:*/}<button onClick={() => handleClick(id)}>About Friend</button>
        </div>
    );
};

export default Friend;