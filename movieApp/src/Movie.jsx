import React, { Component } from 'react'
import moment from 'moment'
import {getNoramlizedRating} from './helpers/getNoramlizedRating.js'

const Movie = (props) => {
    const movieDetails = props.movieDetails
    const noramlizedRating = getNoramlizedRating(movieDetails.rating)
    let movieActors = movieDetails.actors.map((actor) => <li key={actor}>{actor}</li>)
    const ratingStyle = {
        color: noramlizedRating
    }
    const verticalStrip = {
        width: 20,
        backgroundColor: movieDetails.theme
    }
    return (
    <div className="all-movie"> 
      <div style={verticalStrip} className="strip">
      </div>
      <div className="content">
        <h2>{movieDetails.name} </h2>
        <p>{movieDetails.description}</p>
        Actors: 
        <ul>
          {movieActors}
        </ul>
        Release Date: {moment(movieDetails.releaseDate).format('Do MMMM YYYY')}
      </div>
      <div style={ratingStyle} className="rating">
          {movieDetails.rating}/5
      </div>
    </div>
  )

}

export default Movie
