import React from 'react';
import './style.scss';
import Navigation from '../Navigation';
import Calendar from '../Calendar';

function App() {
  return (
    <div className="page">
      <header className="header"/>
      <div className="page-content">
        <Navigation/>
        <Calendar/>
      </div>
      <footer className="footer"/>
    </div>
  );
}

export default App;

