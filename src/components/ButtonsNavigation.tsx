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

const ButtonsNavigation = ({
  moviesState,
  thumbRef,
  activeIndex,
  setActiveIndex,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={activeIndex === 0}
        style={{opacity: activeIndex === 0 ? 0.2 : 1}}
        onPress={() => {
          thumbRef?.current?.scrollToOffset({
            offset: (activeIndex - 1) * width,
            animated: true,
          });
          setActiveIndex(activeIndex - 1);
        }}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>PREV</Text>
          <Icon name="swapleft" size={42} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeIndex === moviesState?.length - 1}
        style={{opacity: activeIndex === moviesState?.length - 1 ? 0.2 : 1}}
        onPress={() => {
          thumbRef?.current?.scrollToOffset({
            offset: (activeIndex + 1) * width,
            animated: true,
          });
          setActiveIndex(activeIndex + 1);
        }}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>NEXT</Text>
          <Icon name="swapright" size={42} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {fontSize: 12, fontWeight: '500', color: 'white'},
});
