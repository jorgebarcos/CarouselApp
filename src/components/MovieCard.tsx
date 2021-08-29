import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMAGE_SIZE = 117;
const SPACING = 10;

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  scrollToActiveIndex: (index: number) => void;
  activeIndex: number;
  index: number;
}

type Styles = {
  activeIndex: number;
  index: number;
};

const MovieCard = ({movie, scrollToActiveIndex, activeIndex, index}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    getDataStorage();
  }, []);

  const getDataStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('activeItem');
      scrollToActiveIndex(Number(value));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = async () => {
    try {
      await AsyncStorage.setItem('activeItem', index.toString());
      scrollToActiveIndex(index);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri,
          }}
          style={styles({activeIndex, index}).cardImage}
          resizeMethod="auto"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;

const styles = ({activeIndex, index}: Styles) =>
  StyleSheet.create({
    cardImage: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      borderRadius: 12,
      marginRight: SPACING,
      borderWidth: 2,
      borderColor: activeIndex === index ? '#fff' : 'transparent',
    },
  });
