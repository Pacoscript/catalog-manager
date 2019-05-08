import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Catalog from './containers/Catalog/Catalog';
import EditBook from './containers/EditBook/EditBook';
import NewBook from './containers/NewBook/NewBook';
import Genres from './containers/Genres/Genres';
import NewGenre from './containers/NewGenre/NewGenre';
import { Route, withRouter } from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout history={this.props.history}>
          <Route
            exact
            path='/'
            render={() => <Catalog history={this.props.history} />}
          />

          <Route
            path='/catalog'
            render={() => <Catalog history={this.props.history} />}
          />

          <Route
            path='/editBook/:id'
            render={props => (
              <EditBook
                id={props.match.params.id}
                history={this.props.history}
              />
            )}
          />

          <Route
            path='/newBook'
            render={() => <NewBook history={this.props.history} />}
          />

          <Route
            path='/genres'
            render={() => <Genres history={this.props.history} />}
          />

          <Route
            path='/newGenre'
            render={() => <NewGenre history={this.props.history} />}
          />
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
