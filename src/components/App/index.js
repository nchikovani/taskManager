import React from 'react';
import './style.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from '../Navigation';
import Calendar from '../Calendar';
import Day from '../Day';
import Things from '../Things';

function App() {
  
  return (
    <div className="page">
      <header className="header"/>
      <div className="page-content">
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navigation
                displayedLinks="things"
              />
              <Calendar/>
            </Route>
            <Route path="/day/:id">
              <Navigation
                displayedLinks="calendar things"
              />
              <Day/>
            </Route> 
            <Route path="/things">
              <Navigation
                displayedLinks="calendar"
              />
              <Things/>
            </Route> 
          </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer"/>
    </div>
  );
}

export default App;

