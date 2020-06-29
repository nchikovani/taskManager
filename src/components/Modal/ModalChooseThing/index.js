import React from 'react';
import './style.scss';
import Button from '../../generic/Button';
import {connect} from 'react-redux';
import ModalCreateThing from '../ModalCreateThing/ModalCreateThingOfDayContainer';
import Thing from '../../Thing/ThingContainer';
import store from '../../../store';
import {closeModal, openModal, addThingOfDay, addPoint} from '../../../actions'

class ModalChooseThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedThings: [],
    }
    this.chooseHandler = this.chooseHandler.bind(this);
    this.addSelectedThings = this.addSelectedThings.bind(this);
  }
  chooseHandler(id) {
    const index = this.state.selectedThings.indexOf(id),
    selectedThings = this.state.selectedThings.slice();
    if (index !== -1) {
      selectedThings.splice(index, 1);
    } else {
      selectedThings.push(id);
    }
    this.setState({
      selectedThings,
    });
  }
  addSelectedThings() {
    this.state.selectedThings.forEach(id => {
      const thing = this.props.things.find((thing) => thing.id === id),
      points = this.props.points.filter(point => point.thingId === id);
      let thingId;
      if (!thing) return;
      thingId = store.dispatch(addThingOfDay(thing.text, this.props.date)).id;
      points.forEach(point => {
        store.dispatch(addPoint(thingId, point.text));
      });
    });
    store.dispatch(closeModal());
  }
  render() {
    return (
    <React.Fragment>
      <span className="modal-chose-thing__text">Выберите дела из списка стандартных дел или создайте <button
        className="modal__button-new-thing"
        onClick={()=>store.dispatch(openModal(<ModalCreateThing date={this.props.date}/>))}
      >новое дело</button>.</span>
      <ul className="modal-choose-thing__thing-list">
        {this.props.things.map(thing =>
          <Thing
            key={thing.id}
            id={thing.id}
            text={thing.text}
            chooseHandler={this.chooseHandler}
            selected={this.state.selectedThings.includes(thing.id)}            
          />)}
      </ul>
      <Button
        className="modal-button"
        onClick={this.addSelectedThings}
      >Добавить</Button>
    </React.Fragment>
  );
  }
  
}
const mapStateToProps = function(store) {
  return {
    things: store.things,
    points: store.points,
  }
}

export default connect(mapStateToProps)(ModalChooseThing);