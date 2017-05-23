import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import AppBarBoard from '../src';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const AppBarBoardExample = require('raw!../src/AppBarBoard.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={AppBarBoardExample} scope={{ React, AppBarBoard }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
