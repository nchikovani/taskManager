import React from 'react';
import {useParams} from 'react-router-dom';
import './style.scss';

function Day() {
	const {id} = useParams();
	return (
		<h2>{"День "+id}</h2>
	);
}

export default Day;