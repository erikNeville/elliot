import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { ThemeProvider } from "styled-components";

import App from "./App";
import { theme } from "./common/ui/theme";
import * as serviceWorker from "./serviceWorker";
import {rootReducer} from './store/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
