import React from 'react'
import logic from '../../logic'
import './genres.css'

function Genres(){
    return <main className='genres'>
        <div>
            <h3>Genres List</h3>
            <ul>
                {logic.genres.map(genre =>
                <li>{genre.name}</li>)}
            </ul>
        </div>
    </main>
}

export default Genres