import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Error from '../../components/Error/Error'
import './newBook.css'
import logic from '../../logic'
import Loader from 'react-loader-spinner'

class NewBook extends Component {
    state = {
        error: null, 
        genres: null, 
        title: null, 
        genre: null, 
        prize: null, 
        loading: false}

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
        this.setState({loading: true})
        setTimeout(()=>{
            this.create(this.state.title, this.state.genre, this.state.prize)
        }, 1000)
    }

    create = (title, genre, prize) => {
        try{
            logic.createBook(title, genre, prize)
            this.props.history.push('/')
        }
        catch(err){this.setState({ error: err.message })}
    }

    render() {
        const error = this.state.error
        let newBook = null
        if (this.state.loading === false) {
            newBook =
            <div className='new-book'>
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
        } else {
            newBook =
            <div style={{display:'flex', justifyContent: 'center'}}>
                <Loader />
            </div>   
        }

        return newBook
    
    }
}

export default withRouter(NewBook)