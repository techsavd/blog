import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../posts';

const HomePage = () => {
  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;