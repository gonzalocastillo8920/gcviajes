import React from 'react'
import './styles.css';

export default function ItemListContainer ({greeting}) {
  return (
    <div className="container">
        <h2> {greeting} </h2>
    </div>
  )
}
