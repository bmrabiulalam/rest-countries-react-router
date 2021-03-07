import React from 'react';
import {Link} from 'react-router-dom';

const Head = () => {
    return (
        <div style={{backgroundColor: 'tomato', padding: '20px', marginBottom: '15px', fontSize: '30px', fontWeight: 700}}>
            <nav>
                <ul style={{textDecoration: 'none', listStyle: 'none', color: 'white'}}>
                    <Link to='/home'><li style={{color: 'white'}}>Home</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Head;