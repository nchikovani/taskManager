import React from 'react';
import './style.scss';
import Input from '../../generic/Input';
import Button from '../../generic/Button';
import store from '../../../store';
import {addThing, addPoint, closeModal} from '../../../actions'

class ModalCreateThing extends React.Component {
  constructor() {
    super();
    this.state = {
      points: [],
      thingText: "",
    };
    this.lastPointId = 0;
    this.addPoint = this.addPoint.bind(this);
    this.saveThing = this.saveThing.bind(this);
  }
  thingNameHandler(e) {
  	const target = e.target;
  	this.setState({
  	  thingText: target.value,
  	});
  }
  addPoint() {
    this.setState((state, props) => {
      const points = state.points.slice();
      points.push({
      	id: this.lastPointId++,
      	text: "",
      });
      return {
        points,
      }
    });
  }
  pointNameHandler(e, id) {
  	const target = e.target;
  	this.setState(function(state, props) {
  	  const points = state.points.slice();
      points.find((point)=>point.id === id).text = target.value;
      return {
        points,
      }
  	});
  }
  removePoint(id) {
  	this.setState(function(state, props) {
  	  const points = state.points.filter(point => point.id !== id);
      return {
        points,
      }
  	});
  }
  saveThing() {
  	const thingId = store.dispatch(addThing(this.state.thingText)).id;
  	this.state.points.forEach((point) => store.dispatch(addPoint(thingId, point.text)));
  	store.dispatch(closeModal());
  }
  render() {
    return (
      <React.Fragment>
        <Input
          className="modal-create-thing__thing-name"
          placeholder={"Введите название дела"}
          value={this.state.thingText}
          onChange={(e)=>this.thingNameHandler(e)}
        />
        <div className="modal-create-thing__create-points">
          <h3>Пункты:</h3>
          <Button
            onClick={this.addPoint}
          ><i className="fas fa-plus"/></Button>
        </div>
        <ul className="modal-create-thing__point-list">
          {this.state.points.map((point)=>
            <li key={point.id}>
	          <Input
	            placeholder="Введите название пункта"
	            value={point.text}
	            onChange={(e)=>this.pointNameHandler(e, point.id)}
	          />
	          <Button
	          	onClick={()=>this.removePoint(point.id)}
	          ><i className="fas fa-minus"></i></Button>
	        </li>
          )}
        </ul>
        <Button
          className="modal-create-thing__add-thing"
          onClick={this.saveThing}
        >Добавить</Button>
      </React.Fragment>
    );
  }
  
}

export default ModalCreateThing;