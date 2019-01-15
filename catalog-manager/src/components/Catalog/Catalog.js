import React, { Component } from 'react'
import './catalog.css'
import logic from '../../logic'
import Book from '../Book/Book'

class Catalog extends Component {
    state= {error: null, books: null, genres: null, genre: 'All'}

    componentDidMount = async () => {
        const books = await logic.listCatalog(this.state.genre)
        const genres = await logic.listGenres()
        this.setState({books, genres})
        
    }

    handleGenreChange = async (event) => {
        event.preventDefault()
        const genre = event.target.value
        this.setState ({genre})
        const books = await logic.listCatalog(genre)
        this.setState({books})
    }

    render(){
        return <main>
            <section className= 'filter'>
                <div>
                    <label>Searh by Genre</label>
                    <select defaultValue='' onChange={this.handleGenreChange}>
                        <option value='All'>All</option>
                        {this.state.genres && this.state.genres.map(genre =>
                            <option value={genre.name} label={genre.name} />)}
                    </select>
                </div>
            </section>

            <section className='books'>
                {this.state.books && this.state.books.map(book=>
                <Book
                    editBook={this.props.editBook}
                    deleteBook={this.props.deleteBook}
                    id={book.id}
                    title={book.title} 
                    genre={book.genre} 
                    prize={book.prize}
                />)}
            </section>
        </main>
    }

}

export default Catalog