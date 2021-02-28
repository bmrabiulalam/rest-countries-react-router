import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import usersData from './data/data.json';
import User from './components/User/User';
import Count from './components/Count/Count';


function App() {
  const [users, setUsers] = useState([]);
  const [addedUser, setAddedUser] = useState([]);
  useEffect(() => {
    setUsers(usersData);
  }, []);
  const handleClick = (user) => {
    setAddedUser([...addedUser, user]);
  }

  return (
    <div className="App">
      <h1>Foo Users</h1>
      <div style={{display: 'flex'}}>
        <div>
          {users.map(user => <User handleClick={handleClick} user={user} key={user.id}></User>)}
        </div>
        <div>
          <Count addedUser={addedUser}></Count>
        </div>
      </div>
    </div>
  );
}

export default App;
