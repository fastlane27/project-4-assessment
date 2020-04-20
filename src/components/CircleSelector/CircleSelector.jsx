import React from 'react';
import styles from './CircleSelector.module.css';

const CircleSelector = ({ handleSelectCircle, selectedCircle }) => {
  return (
    <div className={styles.CircleSelector}>
      <button
        onClick={() => handleSelectCircle(1)}
        className={selectedCircle === 1 ? styles.selected : null}
      >
        {selectedCircle === 1 ? 'Circle 1 Selected' : 'Select Circle 1'}
      </button>
      <button
        onClick={() => handleSelectCircle(2)}
        className={selectedCircle === 2 ? styles.selected : null}
      >
        {selectedCircle === 2 ? 'Circle 2 Selected' : 'Select Circle 2'}
      </button>
      <button
        onClick={() => handleSelectCircle(3)}
        className={selectedCircle === 3 ? styles.selected : null}
      >
        {selectedCircle === 3 ? 'Circle 3 Selected' : 'Select Circle 3'}
      </button>
      <button
        onClick={() => handleSelectCircle(4)}
        className={selectedCircle === 4 ? styles.selected : null}
      >
        {selectedCircle === 4 ? 'Circle 4 Selected' : 'Select Circle 4'}
      </button>
    </div>
  );
}

export default CircleSelector;
