import React from 'react';
import {Image, StyleSheet, View, Dimensions, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
const {width, height} = Dimensions.get('screen');

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width, height}}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
  },
  containerTitle: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    position: 'absolute',
    bottom: 300,
    width: '100%',
    height: '15%',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});
