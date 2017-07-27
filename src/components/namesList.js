import React, { Component } from 'react';

export default ({data, filterText, addFavourite}) => {
  const namesList = data
    .filter(name => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
    })
    .map(name => {
      return (
        <li 
          key={name.id} 
          className={name.sex}
          onClick={() => addFavourite(name.id)}
        >
          {name.name}
        </li>
      );
    });
  return (
    <div className="App"> 
      <ul>
        {namesList}
      </ul>
    </div>
  );
}