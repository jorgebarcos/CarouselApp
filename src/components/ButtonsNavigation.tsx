import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Movie} from '../interfaces/movieInterface';
const {width} = Dimensions.get('screen');

interface Props {
  moviesState: Movie[];
  scrollToActiveIndex: (index: number) => void;
  thumbRef: React.RefObject<FlatList<any>>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

type Styles = {
  activeIndex?: number;
  moviesState: Movie[];
};

const ButtonsNavigation = ({
  moviesState,
  thumbRef,
  activeIndex,
  setActiveIndex,
}: Props) => {
  return (
    <View style={styles({activeIndex, moviesState}).container}>
      <TouchableOpacity
        disabled={activeIndex === 0}
        style={styles({activeIndex, moviesState}).btnLeft}
        onPress={() => {
          thumbRef?.current?.scrollToOffset({
            offset: (activeIndex - 1) * width,
            animated: true,
          });
          setActiveIndex(activeIndex - 1);
        }}>
        <View style={styles({activeIndex, moviesState}).btnContainer}>
          <Text style={styles({activeIndex, moviesState}).btnText}>PREV</Text>
          <Icon name="swapleft" size={42} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeIndex === moviesState?.length - 1}
        style={{}}
        onPress={() => {
          thumbRef?.current?.scrollToOffset({
            offset: (activeIndex + 1) * width,
            animated: true,
          });
          setActiveIndex(activeIndex + 1);
        }}>
        <View style={styles({activeIndex, moviesState}).btnContainer}>
          <Text style={styles({activeIndex, moviesState}).btnText}>NEXT</Text>
          <Icon name="swapright" size={42} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsNavigation;

const styles = ({activeIndex, moviesState}: Styles) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
    },
    btnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btnLeft: {opacity: activeIndex === 0 ? 0.2 : 1},
    btnRight: {opacity: activeIndex === moviesState?.length - 1 ? 0.2 : 1},
    btnText: {fontSize: 12, fontWeight: '500', color: 'white'},
  });
