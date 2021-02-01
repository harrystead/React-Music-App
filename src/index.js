import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.scss";
import Player from './components/Player';
import Songs from './components/Songs'

ReactDOM.render(
  <div className="app"> 
   <Songs />
   <Player/>
  </div>,
  document.getElementById('root')
);
