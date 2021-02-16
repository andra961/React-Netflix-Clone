const baseURL = "https://api.themoviedb.org/3"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    netflixMovies: (baseURL + "/discover/tv?with_networks=213&api_key=" + API_KEY),
    trendingMovies: (baseURL + "/trending/movie/week?api_key=" + API_KEY),
    actionMovies: (baseURL + "/discover/movie?with_genres=28&api_key=" + API_KEY),
    animationMovies: (baseURL + "/discover/movie?with_genres=16&api_key=" + API_KEY),
    thrillerMovies: (baseURL + "/discover/movie?with_genres=53&api_key=" + API_KEY),
    comedyMovies: (baseURL + "/discover/movie?with_genres=35&api_key=" + API_KEY),
    horrorMovies: (baseURL + "/discover/movie?with_genres=27&api_key=" + API_KEY),
    
    imageBase: "https://image.tmdb.org/t/p/original"
}



export default requests