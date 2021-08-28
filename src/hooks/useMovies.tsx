import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get('/now_playing');
    const movies = resp.data.results;
    setMoviesState(movies.slice(0, 10));
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesState,
    isLoading,
  };
};
