import React, { Component } from 'react'
import Movie from './Movie.jsx'

class MovieList extends Component {
    render() {
        console.log(this.props.movies)
        let movies = this.props.movies.map((movie) => {
          return( <li key={movie.id}><Movie movieDetails={movie}/> </li> )
      })
        return (
      <div className="">
       {movies}
      </div>
    )
    }
}

export default MovieList
