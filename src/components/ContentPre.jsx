import React, { Component } from 'react'

export default function ContentPre({Orchids}) {
   console.log(Orchids)
    return (
      <div className="container">
      <div className="row">
        {Orchids.map(orchid=> (
          <div className="column">
          <div className="card">
            <img src={orchid.img} alt={orchid.image} />
            <h2>{orchid.id}</h2>
            <h3>{orchid.name}</h3>
            <p className="title">{orchid.rating}</p> <br />
            <p className="title">{orchid.isSpecial}</p> <br />
            <p className="title">{orchid.rating}</p> <br />
            <p className="title">{orchid.color}</p> <br />
            <p className="title">{orchid.origin}</p> <br />
            <p className="title">{orchid.category}</p> <br />
            <button>Detail</button>
          </div>
        </div>
        ))}
      </div>
    </div>
    
    )
}
