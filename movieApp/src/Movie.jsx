import React, { Component } from 'react'

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
       </ul>
      </div>
    )
    }
}

export default Movie
