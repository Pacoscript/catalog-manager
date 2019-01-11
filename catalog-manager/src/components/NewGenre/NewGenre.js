import React, { Component } from 'react'
import './newGenre.css'

class NewGenre extends Component {
    state = {error: null}

    componentDidMount = () => {
        console.log('hello world')
    }

    render() {
        return <main>
            <div class='new-genre'>
                <h3>ADD A NEW GENRE</h3>
                <form>
                    <div>
                        <label>Genre</label>
                        <input />
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