import React, { Component } from 'react'
import './catalog.css'
import logic from '../../logic'
import Book from '../Book/Book'

class Catalog extends Component {
    state= {books: null, genres: null, genre: 'All'}

    componentDidMount = () => {
        const books = logic.listCatalog(this.state.genre)
        const genres = logic.listGenres()
        this.setState({books, genres})
        
    }

    handleGenreChange = (event) => {
        event.preventDefault()
        const genre = event.target.value
        this.setState ({genre})
        const books = logic.listCatalog(genre)
        this.setState({books})
    }

    render(){
        return <div className='main'>
            <section className= 'filter'>
                <div>
                    <label>Searh by Genre</label>
                    <select defaultValue='' onChange={this.handleGenreChange}>
                        <option value='All'>All</option>
                        {this.state.genres && this.state.genres.map((genre) =>
                            <option key={genre.name} value={genre.name} label={genre.name} />)}
                    </select>
                </div>
            </section>

            <section className='books'>
                {this.state.books && this.state.books.map(book=>
                <Book
                    key={book.id}
                    editBook={this.props.editBook}
                    deleteBook={this.props.deleteBook}
                    id={book.id}
                    title={book.title} 
                    genre={book.genre} 
                    prize={book.prize}
                />)}
            </section>
        </div>
    }

}

export default Catalog