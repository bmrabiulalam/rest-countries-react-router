import React from 'react';
import {Link} from 'react-router-dom';

const Head = () => {
    return (
        <div style={{background: 'lightgray', lineHeight: '60px', textDecoration: 'none', fontSize: '30px', fontWeight: 600}}>
            <nav>
                <ul style={{listStyle: 'none'}}>
                    <Link to="/home"><li>Home</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Head;