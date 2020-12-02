const KEY = "953d2c11088bd2034c43d8b911c96c49";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};

export default requests;
