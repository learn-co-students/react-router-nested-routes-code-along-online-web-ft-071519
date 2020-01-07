import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Route exact path="/" render={() => <div>Home</div>} />
            
            {/*Below, the render function passes the object, routerProps, as a parameter to <MoviesPage />. 
            Using "render", instead of component also passes in the URL path that causes that calls the render, "/movies".            
            The spread operator will create props for key present in routerProps.
            
            */}
            <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
