import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Catalog from '../components/Catalog/Catalog'
import NewBook from '../components/NewBook/NewBook'
import Genres from '../components/Genres/Genres'
import NewGenre from '../components/NewGenre/NewGenre'
import EditBook from '../components/EditBook/EditBook'
import { Route, withRouter } from 'react-router-dom'
import logic from '../logic';


class App extends Component {
  state = {error: null, idEdit: null}

  handleGoCatalog = () => {
    this.setState({ error: null})
    return this.props.history.push('/catalog')
  }

  handleGoNewBook = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/newBook')
  }

  handleGoGenres = (event) => {
    if(event) event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/genres')
  }

  handleGoNewGenre = (event) => {
    event.preventDefault()
    this.setState({ error: null})

    return this.props.history.push('/newGenre')
  }

  handleGoEdit = (id) => {
    const idEdit = id
    this.setState({idEdit})
    return this.props.history.push('/editBook')
  }

  handleDeleteBook = (id) =>{
      logic.deleteBook(id)
      return this.props.history.push('/catalog')
  }

  handleDeleteGenre = (id) =>{
    logic.deleteGenre(id)
    return this.props.history.push('/genres')
    
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

        <Route exact path="/" render={() => <Catalog 
          editBook = {this.handleGoEdit}
          deleteBook = {this.handleDeleteBook}
        />} />

        <Route path='/editBook' render={() => <EditBook 
          id={this.state.idEdit}
          onGoCatalog={this.handleGoCatalog}
          />}/>

        <Route path='/catalog' render={() => <Catalog 
          editBook = {this.handleGoEdit}
          deleteBook = {this.handleDeleteBook}
          />}/>

        <Route path='/newBook' render={() => <NewBook 
          onGoCatalog={this.handleGoCatalog} 
          />}/>

        <Route path='/genres' render={() => <Genres
        deleteGenre = {this.handleDeleteGenre}
         />}/>

        <Route path='/newGenre' render={() => <NewGenre
           onGoGenres={this.handleGoGenres}
         />}/>
      </div>
      
    );
  }
}

export default withRouter(App)
