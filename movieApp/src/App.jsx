import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import axios from 'axios'
import {getMovies} from './helpers/fetchMovies.js'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {movies: [], allActors: []}
    }
    componentDidMount () {
        getMovies('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then ((response) => {
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
      })
      
    }
    render() {
        if(this.state.movies.length === 0) {
          return (<div>Loading ....</div>)
      }
        else {
          return (
          <div className="">
            <h1>THIS WEEK MOVIES</h1>
            <FilterActor />
            <MovieList />
          </div>
      )
      }
      
    }
}

const FilterActor = (props) => {
    return (<h3>Filter by Actor</h3>)
}

export default App
