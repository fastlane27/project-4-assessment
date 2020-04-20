import React, { useState } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const App = () => {
  const [selectedCircle, setSelectedCircle] = useState(1);

  const handleSelectCircle = (num) => {
    setSelectedCircle(num);
  }

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector
          handleSelectCircle={handleSelectCircle}
          selectedCircle={selectedCircle}
        />
        <Circles selectedCircle={selectedCircle} />
      </main>
    </div>
  );
}

export default App;
