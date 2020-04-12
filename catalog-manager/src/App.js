import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Catalog from './containers/Catalog/Catalog';
import EditBook from './containers/EditBook/EditBook';
import NewBook from './containers/NewBook/NewBook';
import Genres from './containers/Genres/Genres';
import NewGenre from './containers/NewGenre/NewGenre';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <Route exact path='/' render={() => <Catalog />}/>
          <Route path='/editBook/:id' render={props => <EditBook id={props.match.params.id} />}/>
          <Route path='/newBook' render={() => <NewBook />}/>
          <Route path='/genres' render={() => <Genres />}/>
          <Route path='/newGenre' render={() => <NewGenre />}/>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
