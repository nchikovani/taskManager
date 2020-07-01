import React from 'react';
import {useParams} from 'react-router-dom';
import Thing from '../Thing/ThingOfDayContainer';
import Button from '../generic/Button'
import store from '../../store';
import {connect} from 'react-redux';
import {openModal} from '../../actions';
import ModalChooseThing from '../Modal/ModalChooseThing';
import './style.scss';

function Day({thingsOfDay}) {
  const {id} = useParams(),
    date = new Date(id),
    month = date.getMonth(),
    day = date.getDate(),
    monthNames = ['Января', 'Февраля', 'Мара', 'Апреля', 'Мая', 'Июня', 'Июля', 'Авгуса', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    now = new Date(),
    isFuture = date - new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (
    <div className="day">
      <div className="day__header">
        <h2>{"Дела на "+ day + " " + monthNames[month]}</h2>
        {isFuture >= 0 &&
          <Button
            onClick={()=>store.dispatch(openModal(<ModalChooseThing date={id}/>))}
          ><i className="fas fa-plus"></i></Button>
        }
      </div>       
      <ul className="day__list-things">
        {
          thingsOfDay && thingsOfDay.filter(thing => thing.date === id).map(thing => <Thing
            key={thing.id}
            id={thing.id}
            text={thing.text}
            checked={thing.checked}
            displayCheckbox={isFuture === 0 ? true : false}
            displayButtonDelete={isFuture >= 0 ? true : false}
            isPast={isFuture<0 ? true : false}
          />)
        }
      </ul>     
    </div>
    
  );
}
const mapStateToProps = function(store) {
  return {
    thingsOfDay: store.thingsOfDay, 
  }
}
export default connect(mapStateToProps)(Day);