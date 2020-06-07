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

function App({modalIsOpen, ModalChild}) {

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
        Child={ModalChild}
      />
    </div>
  );
}

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  ModalChild: PropTypes.elementType,
}

const mapStateToProps=function(store) {
  
  return {
    modalIsOpen: store.modal.isOpen,
    ModalChild: store.modal.Child 

  }
}

export default connect(mapStateToProps)(App);

