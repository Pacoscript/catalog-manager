import React, { Component } from 'react'
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

    handleCreateBook = async (event) => {
        event.preventDefault()
        await logic.createBook(this.state.title, this.state.genre, this.state.prize)
        this.props.onGoCatalog()
        
    }

    render() {
        return <main>
                <div className='new-book'>
                    <h3>ADD A NEW BOOK</h3>
                    <form onSubmit={this.handleCreateBook}>
                        <div>
                            <label>Title</label>
                            <input onChange={this.handleTitleChange} />
                        </div>
                        <div>
                            <label>Genre</label>
                            <select defaultValue='' onChange={this.handleGenreChange}>
                            <option>Genre</option>
                            {this.state.genres && this.state.genres.map(genre =>
                            <option value={genre.name} label={genre.name} />)}
                    </select>
                        </div>
                        <div>
                            <label>Prize</label>
                            <input onChange={this.handlePrizeChange} /> 
                        </div>
                        <div>
                            <input type='submit' value='Create'></input>
                        </div>
                    </form>
                </div>     
            </main>
    
    }
}

export default NewBook