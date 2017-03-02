import React, { Component } from 'react'
import MovieList from './MovieList.jsx'
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
          console.log(actors)
          this.setState ({movies: response.data, allActors: actors})
          console.log(response.data)
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
            <FilterActor allActors={this.state.allActors} currentActor={this.state.currentActor}/>
            <MovieList />
          </div>
          )
        }
      
    }
}

const FilterActor = (props) => {
  handleChange(event) {
    console.log(event.target.value)
  }
  let actorsInDropdown = props.allActors.map((actor)=>{
    return <option value={actor}>actor</option>
  })
    return (<div>
      <h3>Filter by Actor</h3>
      <select value={props.currentActor} onChange={handleChange}>
            <option value={props.currentActor}>{props.currentActor}</option>
            {actorsInDropdown}
      </select>
      </div>)
}

export default App
