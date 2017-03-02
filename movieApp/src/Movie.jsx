import React, { Component } from 'react'
import moment from 'moment'

class Movie extends Component {
    render() {
        const movieDetails = this.props.movieDetails
        let movieActors = movieDetails.actors.map((actor) => <li key={actor}>{actor}</li>)
        return (
      <div className="">
        <h2>{movieDetails.name} </h2>
        <p>{movieDetails.description}</p>
        <ul>
          {movieActors}
          Release Date: {moment(movieDetails.releaseDate).format('Do MMMM YYYY')}
        </ul>
      </div>
    )
    }
}

export default Movie
