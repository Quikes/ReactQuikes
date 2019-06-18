import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tictactoe from './tictactoe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<tictactoe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
