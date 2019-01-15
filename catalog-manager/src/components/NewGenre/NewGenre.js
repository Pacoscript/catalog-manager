import React, { Component } from 'react'
import Error from '../Error/Error'
import './newGenre.css'
import logic from '../../logic'

class NewGenre extends Component {
    state = {error: null, genre: null}

    handleChangeGenre = (event)=>{
        const genre = event.target.value
        this.setState({genre})
    }

    handleNewGenre = async (event) => {
        try{
            event.preventDefault()
            await logic.createGenre(this.state.genre)
            this.props.onGoGenres()
        }
        catch(err){this.setState({ error: err.message })}
    }

    render() {
        const error = this.state.error

        return <main>
            <div className='new-genre'>
                <h3>ADD A NEW GENRE</h3>
                {error && <Error message={error} />}
                <form onSubmit={this.handleNewGenre}>
                    <div>
                        <label>Genre</label>
                        <input onChange={this.handleChangeGenre}/>
                    </div>
                    <div>
                        <input type='submit' value='Create'></input>
                    </div>
                </form>      
            </div>
        </main>
    
    }
}

export default NewGenre