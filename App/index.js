/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { Provider, connect } from "react-redux";
import { Actions, Scene, Router } from "react-native-router-flux";
import { persistStore, autoRehydrate } from "redux-persist";
import Login from "./Scenes/Login";
/**
 * @type Actions
 */
const Navigator = Actions.create(
  <Router hideNavBar>
    <Scene key="root" hideNavBar>
      <Scene key="login" component={Login} initial />
    </Scene>
  </Router>
);

const ReduxRouter = connect(state => ({
  state: state.route
}))(Router);

persistStore(store, { storage: AsyncStorage }, items => {
  console.log("restored");
});

/**
 * @returns {Store} getStore
 */
// var socket;
// const reducers = require("./reducers").default;
// const store = compose(autoRehydrate())(createStore)(
//   reducers,
//   applyMiddleware(remoteActionMiddlewareSocket(socket), apiMiddleware)
// );

/**
 * @property {state, props}
 */
type Props = {};
export default class App extends Component<Props> {
  render() {
    <Provider store={store}>
      <ReduxRouter navigator={Navigator} />
    </Provider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
