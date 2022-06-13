import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.container}>
      <View style={styles.titelcontainer}>
        <Text style={styles.Title}>QuizVerse</Text>
      </View>
      <View style={styles.tagcontainer}>
        <Text style={styles.TagLine}>
          Unlocking knowledge at the speed of thought
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  tagcontainer: {
    padding: 12,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  titlecontainer: {
    marginVertical: 16,
    justifyContent: 'center',
  },

  Title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#2ba4fc',
    fontFamily: 'serif',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  TagLine: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'roboto',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
