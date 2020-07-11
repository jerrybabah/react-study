import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './Nav';
import Topics from './Topics';
import Hook from './Hook';
import Comp from './Comp';

export default function App() {
  return (
    <Router>
      <div>
        
        <Nav />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/hook'>
            <Hook />
          </Route>
          <Route path='/comp'>
            <Comp />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}