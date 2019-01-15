import React, { Component } from 'react'
import './newGenre.css'
import logic from '../../logic'

class NewGenre extends Component {
    state = {error: null, genre: null}

    handleChangeGenre = (event)=>{
        const genre = event.target.value
        this.setState({genre})
    }

    handleNewGenre = async (event) => {
        event.preventDefault()
        await logic.createGenre(this.state.genre)
        this.props.onGoGenres()
    }

    render() {
        return <main>
            <div class='new-genre'>
                <h3>ADD A NEW GENRE</h3>
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