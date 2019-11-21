import React from 'react'
import { Button } from '../shared/Button'

const imgStyle = {
    paddingTop: '20px',
    height: '15em',
}


const titleStyle = {
    background: '#0C1428',
    padding: '20px',
    color: 'white',
    fontWeight: '800',
}
const logoTitle = {
    width: 'fit-content',
    display: 'flex',
    position: 'relative',
    margin: '0 auto',
    top: '-14.5em',
    padding: '5px',
    border: '2px solid black',
    borderRadius: '20px',
    background: '#0C1428',
    color: 'white',
}

const Home = (props) => {
    const { history } = props
    return (
        <div>


            <div style={titleStyle}>Welcome to Prediction World the world leader of Predictions</div>

            <h3>Have a gut feeling on who's going to win an upcoming game?</h3>
            <p>Post your prediction and prove the world the Nostradamus you are</p>

            <img style={imgStyle} src="https://wallpaperplay.com/walls/full/6/d/e/179205.jpg" alt="NFL logo"></img>

            <span style={logoTitle}>NFL Predictions</span>

            <Button
                title='View Predictions'
                className='home'
                onClick={() => history.push('/nflquestions')}
            />
        </div>

    )
}
export default Home