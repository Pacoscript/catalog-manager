import React, { Component } from 'react'
import Error from '../Error/Error'
import './newBook.css'
import logic from '../../logic'

class NewBook extends Component {
    state = {error: null, genres: null, title: null, genre: null, prize: null}

    componentDidMount = async () => {
        const genres = await logic.genres
        this.setState ({genres})
    }

    handleTitleChange = event => {
        const title = event.target.value
        this.setState ({title})
    }

    handleGenreChange = event => {
        const genre = event.target.value
        this.setState ({genre})
    }

    handlePrizeChange = event => {
        const prize = event.target.value
        this.setState ({prize})
    }

    handleCreateBook = (event) => {
        try{
            event.preventDefault()
            logic.createBook(this.state.title, this.state.genre, this.state.prize)
            this.props.onGoCatalog(event)
        }
        catch(err){this.setState({ error: err.message })}
        
    }

    render() {
        const error = this.state.error

        return <div className='new-book'>
                    <h3 className='new-book__title'>ADD A NEW BOOK</h3>
                    {error && <Error message={error} />}
                    <form className='new-book__form'onSubmit={this.handleCreateBook}>
                        <div>
                            <label className='new-book__label'>Title</label>
                            <input onChange={this.handleTitleChange} />
                        </div>
                        <div>
                            <label className='new-book__label'>Genre</label>
                            <select defaultValue='' onChange={this.handleGenreChange}>
                            <option>Genre</option>
                            {this.state.genres && this.state.genres.map(genre =>
                            <option key= {genre.id} value={genre.name} label={genre.name} />)}
                    </select>
                        </div>
                        <div>
                            <label className='new-book__label'>Prize</label>
                            <input onChange={this.handlePrizeChange} /> 
                        </div>
                        <div>
                            <button type='submit' value='Create'>Create</button>
                        </div>
                    </form>
                </div>     
            
    
    }
}

export default NewBook