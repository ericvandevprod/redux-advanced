import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import CommentBox from './components/comment_box';
import CommentList from './components/comment_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <CommentBox />
      <CommentList />
    </div>
  </Provider>
  , document.getElementById('root'));
