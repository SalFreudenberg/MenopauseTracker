import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ItemListContainer} from './components';
import {MyCalendar} from './components';
import './node_modules/react-big-calendar/lib/css/react-big-calendar.css';

ReactDOM.render(
//  <MyCalendar/>,
  <ItemListContainer/>,
  document.querySelector('#root'));
