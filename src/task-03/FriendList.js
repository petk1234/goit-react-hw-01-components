import React from "react";
import styles from './styles3.module.css';
export default function FriendList({friends}){
    return (<ul className = {styles.friendsList}>{
              friends.map( friend =>(
                <li key={friend.id} className={styles.item}>
                  {friend.isOnline === true ?( 
                    <span className={`${styles.status} ${styles.online}`}>{friend.isOnline}</span>)
                  :(
                    <span className={`${styles.status} ${styles.offline}`}>{friend.isOnline}</span>)
                  }
                  <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                  <p className={styles.name}>{friend.name}</p>
                </li>
              ))}
            </ul>)
}