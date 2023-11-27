import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

const PostCard = ({ title, body }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL using axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="card-container">
        {posts.map(post => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
