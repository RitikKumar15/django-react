import React from 'react';

function Card(params){
  return (
    <>
      <div class="card">
        <img src={params.src} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{params.title}</h5>
          <p class="card-text">{params.content}</p>
        </div>
      </div>
    </>
    )
}

export default Card;