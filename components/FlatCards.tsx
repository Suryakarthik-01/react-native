
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Violet</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    marginTop: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#53ef7aff',
  },
  cardThree: {
    backgroundColor: '#9940ccff',
  },
  cardFour: {
    backgroundColor: '#e6e215ff',
  },
});