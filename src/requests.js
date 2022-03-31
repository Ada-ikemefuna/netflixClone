const API_KEY = '18e9272e2b6cf9de06f532c44e053e7a';

const categories = {
  fetchOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchTrendingNow: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default categories;