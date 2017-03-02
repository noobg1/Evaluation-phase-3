import React from 'react'
import ReactDOM from 'react-dom'
import { getMovies } from '../src/helpers/fetchMovies.js'
import ReactTestUtils from 'react-addons-test-utils'

it('getMovies should return a response 200 on valid request', (done) => {
    getMovies('https://movie-api-atlrumqzze.now.sh/movies-ref')
    .then((response) => {
        expect(response.status).toEqual(200)
        done()
    })
    .catch((error) => {
        console.log(error)
    })
})
it('getMovies should return a error message on invalid request', (done) => {
    getMovies('https://www.google.com/')
    .then((response) => {
      
      
    })
    .catch((error) => {
        expect(error.toString()).toEqual('Error: Network Error')
        done()
    })
})