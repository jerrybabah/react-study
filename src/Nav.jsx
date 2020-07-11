import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
        <li>
          <Link to='/hook'>Hook</Link>
        </li>
        <li>
          <Link to='/comp'>Comp</Link>
        </li>
        <li>
          <Link to='/async'>Async</Link>
        </li>
      </ul>
    </nav>
  )
}