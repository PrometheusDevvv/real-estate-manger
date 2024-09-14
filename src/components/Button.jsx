import React from 'react'
import PlusRounded from '../assets/icons/PlusRounded'

const Button = ({title="default", filled=true}) => {
    let stylee= {
        color: filled ? "white" : "#F93B1D",
        backgroundColor : filled ? "#F93B1D" : "white"
    }
  return (
    <button className="button" style={stylee}>
          <span className="action-label">{title}</span>
    </button>
  )
}

export default Button