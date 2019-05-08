import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import logic from '../../logic'
import './genres.css'

class Genres extends Component{

    handleDeleteGenre = (id) =>{
        logic.deleteGenre(id)
        return this.props.history.push('/genres')
    }

    render () {
        return <div className='genres'>
            <div>
                <h3>Genres List</h3>
                <ul>
                    {logic.genres.map(genre =>
                    <li key={genre.id}>{genre.name}
                    <button onClick={() => this.handleDeleteGenre(genre.id)}>Delete Genre</button>
                    </li>)}
                </ul>
            </div>
        </div>
    }
}

export default withRouter(Genres)