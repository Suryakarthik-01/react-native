import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default ElevatedCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    marginTop: 8,
  },
  container:{
    padding: 8
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8
  },
  cardElevated:{
    backgroundColor: '#a5d300ff',
    elevation: 8,
    shadowOffset: {
        width:10,
        height:10
    },
    shadowColor: '#f51111ff'
  }
});