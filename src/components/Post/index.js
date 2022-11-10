import React from 'react';

import './index.css';

function Post(props) {
  return <article>
    <img className="rotate" alt = {props.alt} src = {props.img} style = {{height: 200}}  />
    <h1 classname="Title">{props.title}</h1>
    <h2 classname="Date">{props.date}</h2>
    <h3 classname="Author">{props.author}</h3>
    <p classname="Text">{props.text}</p>
    {props.highlights.map((highlight)=>
      <li key={highlight.indexOf()}>{highlight}</li>
    )}
  </article>;
}

export default Post;

