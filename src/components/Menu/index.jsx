import React from 'react'
import { menu } from '../../constants/menu'
// import Social from '../Social'
import './style.css'

const index = () => {
    return (
        <>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" name="" id="" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu-list">
                    <h2>Marco Arias</h2>
                    {
                        menu.map(
                            (itemMenu, i) =>
                                <a key={i}>{itemMenu.spanish}</a>
                        )
                    }
                </div>
            </div>
            {/* <Social /> */}
        </>
    )
}

export default index
