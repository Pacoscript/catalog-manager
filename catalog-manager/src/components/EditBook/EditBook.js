import React, { Component } from 'react'
import './newBook.css'
import logic from '../../logic'

class EditBook extends Component {
    state = {error: null, genres: null, id: null, title: null, genre: null, prize: null}

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

    handleSaveBook = event => {
        event.preventDefault()
        logic.modifyBook(this.state.id, this.state.title, this.state.genre, this.state.prize)
        this.props.onGoCatalog()
        
    }

    render() {
        return <main>
                <div className='new-book'>
                    <h3>MODIFY BOOK</h3>
                    <form onSubmit={this.handleSaveBook}>
                        <div>
                            <label>Title</label>
                            <input onChange={this.handleTitleChange} value={this.state.title} />
                        </div>
                        <div>
                            <label>Genre</label>
                            <select defaultValue='' onChange={this.handleGenreChange}>
                            <option>{this.state.genre}</option>
                            {this.state.genres && this.state.genres.map(genre =>
                            <option value={genre.name} label={genre.name} />)}
                    </select>
                        </div>
                        <div>
                            <label>Prize</label>
                            <input onChange={this.handlePrizeChange} value={this.state.prize} /> 
                        </div>
                        <div>
                            <input type='submit' value='Save Changes'></input>
                        </div>
                    </form>
                </div>     
            </main>
    
    }
}

export default EditBook