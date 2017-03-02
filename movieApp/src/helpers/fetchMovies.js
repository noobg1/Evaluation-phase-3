import axios from 'axios'

const getMovies = function (url) {
    return axios.get(url)
}

module.exports = {getMovies}
