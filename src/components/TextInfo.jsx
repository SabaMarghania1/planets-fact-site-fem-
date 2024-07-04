import React from 'react';

export default function TextInfo({ planet,tab }) {


let content, source

if(tab === "overview"){
    content = planet.overview.content;
    source = planet.overview.source;
}else if(tab ==="structure"){
    content =planet.structure.content;
    source = planet.structure.source;
}else if(tab === "geology"){
    content = planet.geology.content;
    source = planet.geology.source
}

  return (
    <div className="text-info">
      <h1>{planet.name}</h1>
      <p>{content}</p>
      <span>Source: <a href={source} target="_blank" rel="noopener noreferrer">Wikipedia</a></span>
    </div>
  );
}