import React from 'react';
import './style.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Calendar from '../Calendar';
import Day from '../Day';
import Things from '../Things';
import Modal from '../Modal';
import {connect} from 'react-redux';

function App({modalIsOpen, modalChild}) {

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
      <Modal
        isOpen={modalIsOpen}
        child={modalChild}
      />
    </div>
  );
}

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  modalChild: PropTypes.element,
}

const mapStateToProps=function(store) {
  
  return {
    modalIsOpen: store.modal.isOpen,
    modalChild: store.modal.child 

  }
}

export default connect(mapStateToProps)(App);

