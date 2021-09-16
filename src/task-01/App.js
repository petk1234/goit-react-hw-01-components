import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import Profile from './Profile.js';
//console.log('hello');
//console.log(user.name);

const App = ({name, tag, location, avatar, stats}) =>(
    <Profile 
      name = {user.name}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      likes = {user.stats.likes}
      views = {user.stats.views}
      followers = {user.stats.followers}

    />
    // <div className="profile">
    //   <div className="description">
    //     <img
    //       src={avatar}
    //       alt="Аватар пользователя"
    //       height="350"
    //       className="avatar"
    //     />
    //     <p className="name">{name}</p>
    //     <p className="tag">@{tag}</p>
    //     <p className="location">{location}</p>
    //   </div>

    //   <ul className="stats">
    //     <li>
    //       <span className="label">Followers</span>
    //       <span className="quantity">{stats.followers}</span>
    //     </li>
    //     <li>
    //       <span className="label">Views</span>
    //       <span className="quantity">{stats.views}</span>
    //     </li>
    //     <li>
    //       <span className="label">Likes: </span>
    //       <span className="quantity">{stats.likes}</span>
    //     </li>
    //   </ul>
    // </div>
);

ReactDOM.render(<App 
    // name = {user.name}
    // tag = {user.tag}
    // location = {user.location}
    // avatar = {user.avatar}
    // stats = {user.stats}
/>, document.getElementById('root'));