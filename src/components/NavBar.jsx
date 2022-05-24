import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div >
            <h5>
                <NavLink to={'/'}>Конвертер валют</NavLink>
            </h5>
            <h5>
                <NavLink to={'/currency'}>Курсы валют</NavLink>
            </h5>
        </div>
    )
}
export default NavBar
