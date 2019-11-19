import React from 'react'
import './styles/Card.css'

export const CardHeader = ({imageUrl}) => {
    return(
        <div>
            <img src={imageUrl} alt="card header"/>
        </div>

    )
}