import React from 'react'
import './Cards.css';


const cardStyle = {
    width: '20rem'
}

const Cards = ({ image, heading, text, link }) => {
    return (

        <div className="feature-card">
            <img className="" src={image} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">{heading}</h3>
                <p className="card-text">{text}</p>
                <a href="#" className="card-link text-center">{link}</a>
            </div>
        </div>

    )
}

export default Cards
