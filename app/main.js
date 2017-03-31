import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store';
import App from "./components/App";
import ContactsList from "./components/ContactsList";
import ViewContactContainer from "./containers/ViewContactContainer";
import FormContactContainer from "./containers/FormContactContainer";
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ContactsList}></IndexRoute>
        <Route path="/contacts/view/:id" component={ViewContactContainer}></Route> 
        <Route path="/contacts/addedit" component={FormContactContainer}></Route>
        <Route path="/contacts/addedit/:id" component={FormContactContainer}></Route>
      </Route>
    </Router>
  </Provider>
  , document.body.appendChild(document.createElement('div'))
  );