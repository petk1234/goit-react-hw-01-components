import React from "react";
import PropTypes from 'prop-types';
import styles from './styles2.module.css';

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

function Section({title, stats}){
   return <section className={styles.statistics}>
      {title !== undefined &&(<h2 className={styles.title}>{title}</h2>)}

      {/* <ul className={styles.statList}>
        <li className={styles.item} style={{backgroundColor: getRandomColor()}}>
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
        </li>
        <li className={styles.item} style={{backgroundColor: getRandomColor()}}>
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}</span>
        </li>
        <li className={styles.item} style={{backgroundColor: getRandomColor()}}>
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}</span>
        </li>
        <li className={styles.item} style={{backgroundColor: getRandomColor()}}>
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}</span>
        </li>
      </ul> */}
      <ul className={styles.statList}>
          {stats.map( stat =>(
              <li key={stat.id} className={styles.item} style={{backgroundColor: getRandomColor()}}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
              </li> 
          ))}
      </ul>
    </section> 
}

Section.defaultProps = {
    stats: ['Sheesh', 'Car'],
}

Section.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Section;