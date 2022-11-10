import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
    <audio src = "https://www.youtube.com/watch?v=Gs069dndIYk"></audio>
  {posts.map((posts)=>{
    return <Post key={posts.postId} title={posts.title} date={posts.date} author={posts.author} text={posts.text} highlights={posts.highlights} img={posts.image.link} alt={posts.image.alt} />;
  })}
  </main>;
}

export default Main;
