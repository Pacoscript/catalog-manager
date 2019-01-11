import React, { Component } from 'react'
import './catalog.css'

class Catalog extends Component {
    state= {error: null}

    componentDidMount = () => {
        console.log('hello')
    }

    render(){
        return <main>
            <section class= 'filter'>
                <div>
                    <label>Searh by Genre</label>
                    <select>
                        <option>fiction</option>
                        <option>art</option>
                        <option>drama</option>
                    </select>
                </div>
            </section>

            <section class='books'>
                <div class='card'>
                    <h3>Title1</h3>
                    <p>Genre: Terror</p>
                    <p>Prize: 19 euros</p>
                    <div class='card__buttons'>
                        <div>
                            <a href='#'>Edit</a>
                        </div>
                        <div>
                            <a href='#'>Delete</a>
                        </div>
                    </div>
                </div>

                <div class='card'>
                    <h3>Title2</h3>
                    <p>Genre: Drama</p>
                    <p>Prize: 19 euros</p>
                    <div class='card__buttons'>
                        <div>
                            <a href='#'>Edit</a>
                        </div>
                        <div>
                            <a href='#'>Delete</a>
                        </div>
                    </div>
                </div>

                <div class='card'>
                    <h3>Title2</h3>
                    <p>Genre: Drama</p>
                    <p>Prize: 19 euros</p>
                    <div class='card__buttons'>
                        <div>
                            <a href='#'>Edit</a>
                        </div>
                        <div>
                            <a href='#'>Delete</a>
                        </div>
                    </div>
                </div>

                <div class='card'>
                    <h3>Title2</h3>
                    <p>Genre: Drama</p>
                    <p>Prize: 19 euros</p>
                    <div class='card__buttons'>
                        <div>
                            <a href='#'>Edit</a>
                        </div>
                        <div>
                            <a href='#'>Delete</a>
                        </div>
                    </div>
                </div>

                <div class='card'>
                    <h3>Title2</h3>
                    <p>Genre: Drama</p>
                    <p>Prize: 19 euros</p>
                    <div class='card__buttons'>
                        <div>
                            <a href='#'>Edit</a>
                        </div>
                        <div>
                            <a href='#'>Delete</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    }

}

export default Catalog