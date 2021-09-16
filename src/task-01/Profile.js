import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Profile ({name, tag, location, avatar, likes, views, followers}){
    //let ulAndDivClass = styles.box;
    //console.log(typeof(ulAndDivClass));
    return (
    <div className={styles.profile}>
      <div className={`${styles.box} ${styles.description}`}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className= {styles.avatar}
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={`${styles.box} ${styles.stats}`}>
        <li className={styles.items}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.items}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.items}>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
    );
}

Profile.defaultProps = {
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/63/Fotothek_df_roe-neg_0002766_001_Portrait_eines_Pioniers_beim_Fotografieren.jpg",
    name: 'John',
    location: 'website',
    tag: '@',    
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    //stats: PropTypes.object.isRequired,
};
export default Profile;