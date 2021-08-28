import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

const IMAGE_SIZE = 117;
const SPACING = 10;

interface Props {
  movies: Movie[];
  scrollToActiveIndex: (index: number) => void;
  thumbRef: React.RefObject<FlatList<any>>;
  activeIndex: number;
}

const HorizontalCarousel = ({
  movies,
  scrollToActiveIndex,
  thumbRef,
  activeIndex,
}: Props) => {
  return (
    <FlatList
      data={movies}
      ref={thumbRef}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: SPACING}}
      renderItem={({item, index}: any) => {
        return (
          <View>
            <MovieCard
              movie={item}
              scrollToActiveIndex={scrollToActiveIndex}
              activeIndex={activeIndex}
              index={index}
            />
            <View style={{width: IMAGE_SIZE, height: 40, marginHorizontal: 5}}>
              <Text style={{color: 'white', marginTop: 5}}>{item.title}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default HorizontalCarousel;
