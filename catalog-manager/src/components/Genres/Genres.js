import React from 'react'
import logic from '../../logic'
import './genres.css'

function Genres(props){
    return <main className='genres'>
        <div>
            <h3>Genres List</h3>
            <ul>
                {logic.genres.map(genre =>
                <li key={genre.id}>{genre.name}<button onClick={() => props.deleteGenre(genre.id)}>Delete Genre</button></li>)}
            </ul>
        </div>
    </main>
}

export default Genres