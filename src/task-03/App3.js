import React from 'react';
import ReactDOM from 'react-dom';
import friends from './friends.json';
import FriendList from './FriendList.js';
const App3 = () =>(
    <FriendList
        friends = {friends}
    /> 
);

ReactDOM.render(<App3/>, document.getElementById('root'));