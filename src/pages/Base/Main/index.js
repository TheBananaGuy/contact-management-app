import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>Following parts of the app are available right now:</p>
        <ul>
          <li>
            <Link to="/contacts">Contact management</Link>
          </li>
        </ul>
      </Jumbotron>
    </>
  );
};

export default Main;
