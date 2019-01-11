import React, { Component } from 'react'
import './newBook.css'

class NewBook extends Component {
    state = {error: null}

    componentDidMount = () => {
        console.log('hello world')
    }

    render() {
        return <main>
                <div className='new-book'>
                    <h3>ADD A NEW BOOK</h3>
                    <form>
                        <div>
                            <label>Title</label>
                            <input />
                        </div>
                        <div>
                            <label>Genre</label>
                            <input />
                        </div>
                        <div>
                            <label>Prize</label>
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

export default NewBook