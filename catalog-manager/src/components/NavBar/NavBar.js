import React from 'react'
import './navBar.css'

function NavBar(props){
    return <header>
        <div className='logo'>
            <i className='fas fa-book fa-3x' ></i>
            <h1>BOOKSTORE</h1>
        </div>
        <nav className='menu'>
            <ul>
                <li><a href='#'>Books</a>
                    <ul>
                        <li><a href='#' onClick = {props.onGoViewBooks}>View</a></li>
                        <li><a href='#'>Create</a></li>
                    </ul>
                </li>
                <li><a href='#'>Genres</a>
                    <ul>
                        <li><a href='#'>View</a></li>
                        <li><a href='#'>Create</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBar