import React from 'react'
import './styles.css'

const ToggleThemeButton = ({ toggle, onChange }) => {

    return (
        <div className="switch-wrap">
            <label className="switch">
                <input type="checkbox" onChange={onChange} defaultChecked={toggle} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default ToggleThemeButton
