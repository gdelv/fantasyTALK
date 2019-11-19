import React from 'react'

const imgStyle = {
    paddingTop: '20px',
    height: '15em',
}
const widgetStyle = {
    border: '2px solid black',
    padding: '20px',
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
    background: 'gray',
    color: 'white',
}

const Home = () => {
    return (
        <>
            <div style={widgetStyle}>sports widget will be here</div>

            <div style={titleStyle}>Welcome to fantasyTALK the world leader of fantasy debates</div>

            <img style={imgStyle} src="https://wallpaperplay.com/walls/full/6/d/e/179205.jpg" alt="NFL logo"></img>

            <span style={logoTitle}>NFL Debates</span>

        </>
    )
}
export default Home