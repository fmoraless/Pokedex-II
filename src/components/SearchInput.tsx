import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.textBackground}>
        <TextInput
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          placeholder="Buscar pokemon"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" color="grey" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
