import React from 'react';
import {useParams} from 'react-router-dom';
import Thing from '../Thing';
import Button from '../generic/Button'
import './style.scss';

function Day() {
  const {id} = useParams();
  return (
    <div className="day">
      <div className="day__header">
        <h2>{"Дела на "+id}</h2>
        <Button><i class="fas fa-plus"></i></Button>
      </div>
      <div className="day__container">
        <ul className="day__list-time">
          <li>8:00</li>
          <li>9:00</li>
          <li>10:00</li>
          <li>11:00</li>
          <li>12:00</li>
          <li>13:00</li>
          <li>14:00</li>
          <li>15:00</li>
          <li>16:00</li>
          <li>17:00</li>
          <li>18:00</li>
          <li>19:00</li>
          <li>20:00</li>
          <li>21:00</li>
          <li>22:00</li>
          <li>23:00</li>
          <li>24:00</li>
        </ul>
        <ul className="day__list-things">
          <li className="day__list-things__item">
            <Thing/>
          </li>
          <li className="day__list-things__item">
            <Thing/>
          </li>
        </ul>
      </div>      
    </div>
    
  );
}

export default Day;