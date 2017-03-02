import React, { Component } from 'react'

export default class FilterActor extends Component {
    constructor (props) {
        super(props)
        this.state = {currentActor: this.props.currentActor}
    }
    
    handleChange(event){

        console.log(event.target.value)
        this.setState({currentActor: event.target.value})
        this.props.changeCurrentActor(event.target.value)
    }
    render () {
        console.log(this.props.allActors)
        let actorsInDropdown = this.props.allActors.map((actor)=>{
            return <option key={actor} value={actor}>{actor}</option>
        })
        return (<div>
      <h3>Filter by Actor</h3>
      <select value={this.state.currentActor} onChange={this.handleChange.bind(this)}>
            <option key={this.state.currentActor} value={this.state.currentActor}>{this.state.currentActor}</option>
            {actorsInDropdown}
      </select>
      </div>)
    }
    
}
