import React from 'react';
import { Link } from 'react-router-dom';

const NgoBlog = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}
  >
   <div>
        <Link to="/ngo/event">
          {' '}
          Start Writing, Share Experiences, Let the word spread{' '}
        </Link>
      </div>
  </div>
);

export default NgoBlog;

