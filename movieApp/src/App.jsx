import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
import FilterActor from './FilterActor.jsx'
import {getMovies} from './helpers/fetchMovies.js'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {movies: [], allActors: [], currentActor: 'all'}
    }
    getAllActorsList (movies) {
        let actorsSet = new Set()
        movies.forEach((movie) => {
            movie.actors.forEach((actor) => {actorsSet.add(actor)})
        })
        return Array.from(actorsSet)
    }
    componentDidMount () {
        getMovies('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then ((response) => {
          let actors = this.getAllActorsList(response.data)
          //console.log(actors)
          this.setState ({movies: response.data, allActors: actors})
          //console.log(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
    }
    changeCurrentActor (actor) {
        this.setState({currentActor: actor})
    }
    getFilteredMovies (allMovies, actorSelected) {
        let filteredMoviesSet = new Set()
        if(actorSelected === 'all')
            return allMovies
        else {
            allMovies.forEach ((movie) => {
                movie.actors.forEach ((actor) => {
                    if (actor === actorSelected) {
                        filteredMoviesSet.add(movie)
                    }
                })
            })
            return Array.from(filteredMoviesSet)
        }
    }
    render() {
        let filteredMovies = this.getFilteredMovies(this.state.movies, this.state.currentActor)

        if(this.state.movies.length === 0) {
            return (<div>Loading ....</div>)
        }
        else {
            return (
          <div className="">
            <h1>THIS WEEK MOVIES</h1>
            <FilterActor allActors={this.state.allActors} currentActor={this.state.currentActor} changeCurrentActor={this.changeCurrentActor.bind(this)}/>
            <MovieList movies={filteredMovies}/>
          </div>
          )
        }
      
    }
}


export default App
