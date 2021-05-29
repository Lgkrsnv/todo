import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'antd/dist/antd.css'; 
import { MainThemeContextProvider } from "./context/MainThemeContext";
import { BrowserRouter } from "react-router-dom";
//redux
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer.js";
import { initialStore } from "./redux/init/initialStore";
//saga, thunk
import TodoSagaWatcher from "./redux/saga/TodoSaga";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

store.subscribe(() => {
  console.log("===getStae USERS===", store.getState().users);
});
store.subscribe(() => {
  console.log("===getStae TODOS===", store.getState().todos);
});

sagaMiddleware.run(TodoSagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainThemeContextProvider>
          <App />
        </MainThemeContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
