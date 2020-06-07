import React from 'react';
import './style.scss';
import Month from './Month';
import Button from '../generic/Button';

class Calendar extends React.Component {
  constructor() {
    super();
    const firstMonth = new Date(),
    secondMonth = new Date(firstMonth.getFullYear(), firstMonth.getMonth()+1, 1);
    this.state = {
      firstMonth: firstMonth,
      secondMonth: secondMonth,
      animated: false,
    }
    this.today = new Date();
    this.monthUp = this.monthUp.bind(this);
    this.monthDown = this.monthDown.bind(this);
  }
  monthUp() {
    const containerHeight = document.querySelector('.calendar__animated-container').clientHeight;
    this.setState(function(state) {
      return {
        animatedMonth: new Date(state.firstMonth.getFullYear(), state.firstMonth.getMonth()-1, 1),
        animated: true,
      }
    }, () => {
      const listElement = document.querySelector('.list-months'),
        containerElement = document.querySelector('.calendar__animated-container'),
        transfer = document.querySelector('.list-months__first-month').offsetTop - document.querySelector('.list-months__animated-month').offsetTop,
        start = Date.now(),
        animationTime = 300;

      containerElement.style.height = containerHeight+'px';
      listElement.style.position = 'absolute';
      listElement.style.top = - transfer+'px';
      const timer = setInterval(()=> {
        const timePassed =  Date.now() - start;
        listElement.style.top = transfer*(timePassed/animationTime - 1) +'px';
        if (timePassed >= animationTime) {
          clearInterval(timer);
          listElement.style.position="static";
          listElement.style.top = 0;
          containerElement.style.height = 'auto';
          this.setState(function(state) {
            return {
              animated: false,
              firstMonth: new Date(state.firstMonth.getFullYear(), state.firstMonth.getMonth()-1, 1),
              secondMonth: state.firstMonth,
            }
          });
          return;
        }
      }, 20);
    });
  }

  monthDown() {
    const containerHeight = document.querySelector('.calendar__animated-container').clientHeight;
    this.setState(function(state) {
      return {
        firstMonth: state.secondMonth,
        secondMonth: new Date(state.secondMonth.getFullYear(), state.secondMonth.getMonth()+1, 1),
        animatedMonth: state.firstMonth,
        animated: true,
      }
    }, () => {
      const listElement = document.querySelector('.list-months'),
        containerElement = document.querySelector('.calendar__animated-container'),
        transfer = document.querySelector('.list-months__first-month').offsetTop - document.querySelector('.list-months__animated-month').offsetTop,
        start = Date.now(),
        animationTime = 300;

      containerElement.style.height = containerHeight+'px';
      listElement.style.position = 'absolute';
      const timer = setInterval(()=> {
        const timePassed =  Date.now() - start;
        listElement.style.top = - timePassed/animationTime * transfer+'px';
        if (timePassed >= animationTime) {
          clearInterval(timer);
          listElement.style.position="static";
          listElement.style.top = 0;
          containerElement.style.height = 'auto';
          this.setState({
            animated: false,
          });
          return;
        }
      }, 20);
    });
  }
  render() {
    return (
      <div className="calendar">
        <div className="calendar__change-month-buttons">
          <Button 
            className="calendar__change-month-button"
            onClick={this.monthUp}
          ><i className="fas fa-chevron-up"></i></Button>
          <Button 
            className="calendar__change-month-button"
            onClick={this.monthDown}
          ><i className="fas fa-chevron-down"></i></Button>
        </div>
        <div className="calendar__animated-container">
          <ul className="list-months">
            { this.state.animated &&
              <li className="list-months__animated-month">
                <Month
                  month = {this.state.animatedMonth}
                  today = {this.today}
                />
              </li>
            }
            <li className="list-months__first-month">
              <Month
                month = {this.state.firstMonth}
                today = {this.today}
              />
            </li>
            <li className="list-months__second-month">
              <Month
                month = {this.state.secondMonth}
                today = {this.today}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calendar;