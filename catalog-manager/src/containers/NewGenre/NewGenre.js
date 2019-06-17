import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Error from '../../components/Error/Error'
import './newGenre.css'
import logic from '../../logic'
import Loader from 'react-loader-spinner'

class NewGenre extends Component {
    state = {
        error: null, 
        genre: null,
        loading: false
    }

    handleChangeGenre = (event)=>{
        const genre = event.target.value
        this.setState({genre})
    }

    handleNewGenre = async (event) => {
        this.setState({loading: true})
        setTimeout(()=>{
        this.newGenre(this.state.genre)
        },1000)
        
    }
    
    newGenre = (genre) => {
        try{
            logic.createGenre(genre)
            this.props.history.push('/genres')
        }
        catch(err){this.setState({ error: err.message })}
    }

    render() {
        const error = this.state.error
        let newGenre = null
        if(this.state.loading === false) {
            newGenre = 
            <div className='new-genre'>
                <h3>ADD A NEW GENRE</h3>
                {error && <Error message={error} />}
                <form onSubmit={this.handleNewGenre}>
                    <div>
                        <label>Genre</label>
                        <input onChange={this.handleChangeGenre}/>
                    </div>
                    <div>
                        <button type='submit' value='Create'>Create</button>
                    </div>
                </form>      
            </div>    
        } else {
            newGenre = 
            <div className='new-genre'>
                <Loader />
            </div>
        }

        return newGenre
    }
}

export default withRouter(NewGenre)