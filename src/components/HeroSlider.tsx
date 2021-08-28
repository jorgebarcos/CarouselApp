import React from 'react';
import {FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  moviesState: Movie[];
  topRef: React.RefObject<FlatList<any>>;
}

const HeroSlider = ({moviesState, topRef}: Props) => {
  return (
    <FlatList
      data={moviesState}
      ref={topRef}
      keyExtractor={item => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({item}: any) => {
        return <MoviePoster movie={item} />;
      }}
    />
  );
};

export default HeroSlider;
