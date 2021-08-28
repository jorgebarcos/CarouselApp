import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';

import HorizontalCarousel from '../components/HorizontalCarousel';
import ButtonsNavigation from '../components/ButtonsNavigation';
import HeroSlider from '../components/HeroSlider';
const {width} = Dimensions.get('screen');

const IMAGE_SIZE = 117;
const SPACING = 10;

const HomeScreen = () => {
  const {moviesState, isLoading} = useMovies();
  const topRef = React.useRef<FlatList>(null);
  const thumbRef = React.useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = React.useState(2);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeroSlider moviesState={moviesState} topRef={topRef} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>New Movies</Text>

        <HorizontalCarousel
          movies={moviesState}
          scrollToActiveIndex={scrollToActiveIndex}
          thumbRef={thumbRef}
          activeIndex={activeIndex}
        />

        <ButtonsNavigation
          moviesState={moviesState}
          scrollToActiveIndex={scrollToActiveIndex}
          thumbRef={thumbRef}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50,
  },
  sectionContainer: {
    backgroundColor: '#162252',
  },
  sectionTitle: {
    fontSize: 25,
    marginLeft: 10,
    color: 'white',
  },
});
