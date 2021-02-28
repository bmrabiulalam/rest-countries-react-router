import React from 'react';

const Count = (props) => {
    return (
        <div>
            <h3>Total Users Added: {props.addedUser.length}</h3>
            <h3>Total Yearly Income of All Added Users: {
                props.addedUser.reduce( (total, user) => total + user.yearlyIncome, 0)
            }</h3>
        </div>
    );
};

export default Count;