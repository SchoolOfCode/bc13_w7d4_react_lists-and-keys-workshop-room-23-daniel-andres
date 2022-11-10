import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <h1 classname="Title">{props.title}</h1>
    <h2 classname="Date">{props.date}</h2>
    <h3 classname="Author">{props.author}</h3>
    <p classname="Text">{props.text}</p>
  </article>;
}

export default Post;

