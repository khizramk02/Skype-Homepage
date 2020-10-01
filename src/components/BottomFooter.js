import React from 'react'
import browser from '../assets/browser.png';
import './BottomFooter.css'

const BottomFooter = () => {
    return (
        <div className='bottom-footer'>
            <div className='box'>
                <img src={browser}></img><select id='lang-box'>
                    <option>English</option>
                    <option>Urdu</option>
                    <option>Arabic</option>
                    <option>Persian</option>
                    <option>French</option>
                    <option>Turkish</option>
                </select>
            </div>

            <div id='lastFooter'>
                <ul>
                    <li>&#169;Microsoft 2020</li>
                    <a href='#'><li>Legal</li></a>
                    <a href='#'><li>About our ads</li></a>
                    <a href='#'><li>Trademarks</li></a>
                    <a href='#'><li>Terms of use</li></a>
                    <a href='#'><li>Privacy & cookies</li></a>
                    <a href='#'><li>Contat us</li></a>
                    <a href='#'><li>Sitemap</li></a>
                </ul>
            </div>
        </div>
    )
}

export default BottomFooter
