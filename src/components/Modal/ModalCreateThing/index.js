import React from 'react';
import './style.scss';
import Input from '../../generic/Input';
import Button from '../../generic/Button';

class ModalCreateThing extends React.Component {
  constructor() {
    super();
    this.state = {
      points: [],
      thing: {
      	id: null,
      	text: "",
      },
    };
    this.lastPointId = 0;
    this.addPoint = this.addPoint.bind(this);
  }
  thingNameHandler(e) {
  	const target = e.target;
  	this.setState(function(state, props) {
  	  const thing = Object.assign({}, state.thing);
  	  thing.text = target.value;
  	  return {
  	  	thing,
  	  }
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
  render() {
    return (
      <React.Fragment>
        <Input
          className="modal-create-thing__thing-name"
          placeholder={"Введите название дела"}
          value={this.state.thing.text}
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
	            placeholder="Введите названия пункта"
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
        >Добавить</Button>
      </React.Fragment>
    );
  }
  
}

export default ModalCreateThing;