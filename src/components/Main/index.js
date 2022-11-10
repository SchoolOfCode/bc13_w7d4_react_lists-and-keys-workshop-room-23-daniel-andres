import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
  {posts.map((posts)=>{
    return <Post key={posts.postId} title={posts.title} date={posts.date} author={posts.author} text={posts.text}/>;
  })}
  </main>;
}

export default Main;
