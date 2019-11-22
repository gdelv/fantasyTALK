import React from 'react'

const footerStyle = {
    background:'#0C1428',
    padding:'40px',
    color:'white'
}


const footerLinks = {
    display: 'flex',
    justifyContent:'space-around',
    color: 'white',
    paddingBottom:'20px',
}

const aStyle = {
    textDecoration: 'underline',
    color:'white',
}
const Footer = () => {
    return(
        <footer style={footerStyle}>
            <div style={footerLinks}>
                <a style={aStyle} href='htttp://www.google.com' target='_blank' rel="noopener noreferrer">Google</a>
                <a style={aStyle} href='htttp://www.facebook.com' target='_blank' rel="noopener noreferrer">Facebook</a>
                <a style={aStyle} href='htttp://www.instagram.com' target='_blank' rel="noopener noreferrer">Instagram</a>
                <a style={aStyle} href='htttp://www.twitter.com' target='_blank' rel="noopener noreferrer">Twitter</a>

            </div>
            <h5>Copyright &copy; 2019 </h5>
        </footer>
    )
}

export default Footer