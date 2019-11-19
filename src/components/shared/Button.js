import React from 'react'
import './styles/Button.css'
export const Button = ({ onClick, className, color, title, variant }) => {
    return (
        <button
            onClick={onClick}
            className={`button ${className} ${variant} ${color}`}>
            {title}
        </button>
    )
}