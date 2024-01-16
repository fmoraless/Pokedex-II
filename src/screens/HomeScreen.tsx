import {Image, FlatList, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/FadeInImage';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(simplePokemonList);

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FadeInImage
            uri={item.picture}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
        // infiniteScroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text> */}
    </>
  );
};
