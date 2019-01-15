import React from 'react' 
import './book.css'
    function Book (props){
        return <div className='card'>
            <h3>Title: {props.title}</h3>
            <p>Genre: {props.genre}</p>
            <p>Prize: {props.prize} euros</p>
            <div class='card__buttons'>
                <div>
                    <button onClick={() => props.editBook(props.id)}>Edit</button>
                </div>
                <div>
                    <button onClick={() => props.deleteBook(props.id)}>Delete</button>
                </div>
            </div>
        </div>


    }
export default Book