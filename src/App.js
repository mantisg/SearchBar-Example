import React from 'react';
import SearchBar from "./Components/SearchBar"
import Data from "./Data.json"
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search" data={Data} />
    </div>
  );
}

export default App;