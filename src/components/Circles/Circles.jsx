import React from 'react';
import styles from './Circles.module.css';

const Circles = ({ selectedCircle }) => {
  return (
    <div className={styles.Circles}>
      <div className={selectedCircle === 1 ? styles.selected : null}>1</div>
      <div className={selectedCircle === 2 ? styles.selected : null}>2</div>
      <div className={selectedCircle === 3 ? styles.selected : null}>3</div>
      <div className={selectedCircle === 4 ? styles.selected : null}>4</div>
    </div>
  );
}

export default Circles;
