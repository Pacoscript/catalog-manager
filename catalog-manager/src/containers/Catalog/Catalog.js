import React, { Component } from 'react'
import './catalog.css'
import logic from '../../logic'
import Book from '../../components/Book/Book'

class Catalog extends Component {
    state= {books: null, genres: null, genre: 'All', idEdit: null, error: null}

    componentDidMount = () => {
        const books = logic.listCatalog(this.state.genre)
        const genres = logic.listGenres()
        this.setState({books, genres})
        
    }    

    handleGoEdit = (id) => {
        const idEdit = id
        this.setState({idEdit})
        return this.props.history.push(`/editBook/${id}`)
    }

    handleDeleteBook = (id) =>{
        logic.deleteBook(id)
        return this.props.history.push('/catalog')
    }

    handleGenreChange = (event) => {
        event.preventDefault()
        const genre = event.target.value
        this.setState ({genre})
        const books = logic.listCatalog(genre)
        this.setState({books})
    }

    render(){
        return <div className='catalog'>
            <section className= 'catalog__filter'>
                <div>
                    <label>Searh by Genre</label>
                    <select defaultValue='' onChange={this.handleGenreChange}>
                        <option value='All'>All</option>
                        {this.state.genres && this.state.genres.map((genre) =>
                            <option key={genre.name} value={genre.name} label={genre.name} />)}
                    </select>
                </div>
            </section>

            <section className='catalog__books'>
                {this.state.books && this.state.books.map(book=>
                <Book
                    key={book.id}
                    editBook={this.handleGoEdit}
                    deleteBook={this.handleDeleteBook}
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