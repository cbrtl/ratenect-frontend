import React from 'react';
import { Link } from 'react-router-dom';

export default function NgoBlog() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <h3>Ngo Blogs Page</h3>
      <div>
        <Link to="/ngo/event">
          {' '}
          Start Writing, Share Experiences, Let the word spread{' '}
        </Link>
      </div>
    </div>
  );
}
