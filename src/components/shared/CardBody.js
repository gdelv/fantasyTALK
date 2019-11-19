import React from 'react'
import './styles/Card.css'

export const CardBody = ({ children }) => {
    return (
        <div className='card-body'>{children}</div>
    )
}