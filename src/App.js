import React from 'react';
import {
  ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme,
} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReactLink
} from "react-router-dom";

import Home from './Home';
import Positives from './Positives';
import Negatives from './Negatives';
import Servers from './Servers';
import Phones from './Phones';
import Quiz from './Quiz';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/positives">
            <Positives/>
          </Route>
          <Route exact path="/negatives">
            <Negatives/>
          </Route>
          <Route exact path="/servers">
            <Servers/>
          </Route>
          <Route exact path="/phones">
            <Phones/>
          </Route>
          <Route exact path="/quiz">
            <Quiz/>
          </Route>

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
