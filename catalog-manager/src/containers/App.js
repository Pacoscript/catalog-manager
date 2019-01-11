import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Catalog from '../components/Catalog/Catalog'
import NewBook from '../components/NewBook/NewBook'
import Genres from '../components/Genres/Genres'
import NewGenre from '../components/NewGenre/NewGenre'
import { Route, withRouter, Redirect } from 'react-router-dom'

class App extends Component {
  state = {error: null}

  handleGoCatalog = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/catalog')
  }

  handleGoNewBook = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/newBook')
  }

  handleGoGenres = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/genres')
  }

  handleGoNewGenre = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/newGenre')
  }

  render() {
    return (
      <div className='App'>
        <Route path='/' render={() => <NavBar 
          onGoViewCatalog = {this.handleGoCatalog}
          onGoNewBook = {this.handleGoNewBook}
          onGoViewGenres = {this.handleGoGenres}
          onGoNewGenre = {this.handleGoNewGenre}
          />}/>
        <Route path='/catalog' render={() => <Catalog />}/>
        <Route path='/newBook' render={() => <NewBook />}/>
        <Route path='/genres' render={() => <Genres />}/>
        <Route path='/newGenre' render={() => <NewGenre />}/>
      </div>
      
    );
  }
}

export default withRouter(App)
