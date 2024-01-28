import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator color="grey" size={50} />
      <Text style={{marginTop: 3}}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
