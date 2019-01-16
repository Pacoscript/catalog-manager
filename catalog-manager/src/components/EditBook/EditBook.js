import React, { Component } from 'react'
import Error from '../Error/Error'
import './editBook.css'
import logic from '../../logic'

class EditBook extends Component {
    state = {error: null, genres: null, id: this.props.id, title: '', genre: null, prize: ''}

    componentDidMount = () => {
        const genres = logic.genres
        const id = this.props.id
        const book = logic.searchById(id)
        this.setState ({genres})
        this.setState({id})
        this.setState({title:book.title, genre:book.genre, prize:book.prize})
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

    handleSaveBook = (event) => {
        event.preventDefault()
        try{
            logic.modifyBook(this.state.id, this.state.title, this.state.genre, this.state.prize)
            this.props.onGoCatalog(event)
        }
        catch(err){this.setState({ error: err.message })}
        
        
    }

    render() {
        const error = this.state.error

        return <div className='edit-book'>
                <div className='edit-book__card'>
                    <h3>MODIFY BOOK</h3>
                    {error && <Error message={error} />}
                    <form onSubmit={this.handleSaveBook}>
                        <div>
                            <label>Title</label>
                            <input onChange={this.handleTitleChange} value={this.state.title} />
                        </div>
                        <div>
                            <label>Genre</label>
                            <select defaultValue='' onChange={this.handleGenreChange}>
                            <option>Genres</option>
                            {this.state.genres && this.state.genres.map(genre =>
                            <option key={genre.id} value={genre.name} label={genre.name} />)}
                    </select>
                        </div>
                        <div>
                            <label>Prize</label>
                            <input onChange={this.handlePrizeChange} value={this.state.prize} /> 
                        </div>
                        <div>
                            <button type='submit' value='Save Changes'>Save</button>
                        </div>
                    </form>
                </div>     
            </div>
    
    }
}

export default EditBook