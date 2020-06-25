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

class App extends React.Component {

  componentDidMount() {
    window.addEventListener('beforeunload', (e) => {
      localStorage.setItem('things', JSON.stringify(this.props.things));
      localStorage.setItem('thingsOfDay', JSON.stringify(this.props.thingsOfDay));
      localStorage.setItem('points', JSON.stringify(this.props.points));
    });
  }
  render() {
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
          isOpen={this.props.modalIsOpen}
          child={this.props.modalChild}
        />
      </div>
    );
  }
}

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  modalChild: PropTypes.element,
  things: PropTypes.array,
  thingsOfDay: PropTypes.array,
  points: PropTypes.array,
}

const mapStateToProps=function(store) {
  return {
    modalIsOpen: store.modal.isOpen,
    modalChild: store.modal.child,
    things: store.things,
    thingsOfDay: store.thingsOfDay,
    points: store.points,
  }
}

export default connect(mapStateToProps)(App);

