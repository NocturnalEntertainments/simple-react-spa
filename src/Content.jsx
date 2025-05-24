import React from 'react'

function Content({ title, description }) {
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Content;