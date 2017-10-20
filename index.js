import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ItemListContainer} from './src/components';
import {MenopauseCalendar} from './src/menopauseCalendar';
import './node_modules/react-big-calendar/lib/css/react-big-calendar.css';

ReactDOM.render(
  <div>
    <ItemListContainer/>
    <MenopauseCalendar/>
  </div>,
  document.querySelector('#root'));
