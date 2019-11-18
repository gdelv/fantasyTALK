import React from 'react'


const imgStyle = {

    paddingTop: '20px',
    height: '15em',
}
const widgetStyle = {
    border: '2px solid black',
    padding: '20px',
}

const buttonStyle = {
    position: 'relative',
    borderRadius: '20px',
    top: '-6em',
    background: 'white',

}
const titleStyle = {
    background: '#0C1428',
    padding: '20px',
    color: 'white',
    fontWeight: '800',
}
const logoTitle = {
    // fontSize:'20px',
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



const Main = (props) => {
    return (
        <main>
            <div style={widgetStyle}>sports widget will be here</div>

            <div style={titleStyle}>Welcome to fantasyTALK the world leader of fantasy debates</div>

            <img style={imgStyle} src="https://wallpaperplay.com/walls/full/6/d/e/179205.jpg" alt="NFL logo"></img>
            <span style={logoTitle}>NFL Debates</span>
            <input style={buttonStyle} type='button' value='Read More' onClick={props.handleClick}></input>

        </main>
    )
}


export default Main