import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import './navBar.css'

class NavBar extends Component{
    handleGoCatalog = (event) => {
        event.preventDefault()
        this.setState({ error: null})
        return this.props.history.push('/catalog')
    }
    
    handleGoNewBook = (event) => {
        event.preventDefault()
        this.setState({ error: null})
        return this.props.history.push('/newBook')
    }

    handleGoGenres = (event) => {
        if(event) event.preventDefault()
        this.setState({ error: null})
        return this.props.history.push('/genres')
    }

    handleGoNewGenre = (event) => {
        event.preventDefault()
        this.setState({ error: null})
        return this.props.history.push('/newGenre')
    }

    render() {
        return (
        
        <header className='navbar'>
            <div className='navbar__logo'>
                <i className='fas fa-book fa-3x' ></i>
                <h1 className='navbar__name'>BOOKSTORE</h1>
            </div>
            <nav className='navbar__menu'>
                <ul>
                    <li><a href='./'>Books</a>
                        <ul>
                            <li><a href='./' onClick = {this.handleGoCatalog}>View</a></li>
                            <li><a href='./' onClick = {this.handleGoNewBook}>Create</a></li>
                        </ul>
                    </li>
                    <li><a href='./'>Genres</a>
                        <ul>
                            <li><a href='./' onClick = {this.handleGoGenres}>View</a></li>
                            <li><a href='./' onClick = {this.handleGoNewGenre}>Create</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default withRouter(NavBar)