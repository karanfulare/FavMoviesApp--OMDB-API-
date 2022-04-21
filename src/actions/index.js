// action type 
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST ='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creaters 
export function addMovies (movies){
    return {
        type:ADD_MOVIES,
        movies
      }
}

export function addFavourites (movies){
    return {
        type:ADD_FAVOURITES,
        movies
      }
}

export function removeFromFavourites (movies){
    return {
        type:REMOVE_FROM_FAVOURITES,
        movies
      }
}

export function setShowFavourites (val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
      }
}


export function addMovieToList(movie){
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  }
}

export function handleMovieSearch(movie){ //?apikey=3ca5df7&t=${movie} sir ki hai 
  const url = `http://www.omdbapi.com/?apikey=3d8ffbe6&t=${movie}`;
  return function(dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log('movie', movie);

       //dispatch an action
       dispatch(addMovieSearchResult(movie));
    })
  }
}

export function addMovieSearchResult(movie) {
  return { 
    type: ADD_SEARCH_RESULT, 
    movie 
  };
}
