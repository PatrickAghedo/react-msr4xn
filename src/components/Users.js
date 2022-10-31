import React from 'react';

import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';

function Users() {
  return (
    <section className="users-container">
      <Navigation />
      <h2>You are inside the Users Component</h2>
      <h4>URL: localhost:3000/Users/</h4>
      <br />
      <section className="bar1">
        <div>
          <Link className="bar2" to="List">
            List
          </Link>
        </div>
        <div>
          <Link className="bar2" to="ListOfUsers">
            List Of Users
          </Link>
        </div>{' '}
        <br />
        <Outlet />
      </section>
    </section>
  );
}

export default Users;
