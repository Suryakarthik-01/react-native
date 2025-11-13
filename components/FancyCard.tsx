import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.headingText, styles.elevated]}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mountain</Text>
          <Text style={styles.cardLabel}>Mountain</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, repudiandae. Quos quibusdam corporis earum a repellat harum voluptatibus placeat quis. Officiis vitae cum corporis sit, veniam inventore? Officia, quam quod.</Text>
          <Text style={styles.cardFooter}>Mountain</Text>
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
  card: {},
  cardImage: {
    width: 150,
    height: 150,
  },
  elevated: {},
  cardBody: {},
  cardLabel: {},
  cardTitle: {},
  cardDescription: {},
  cardFooter: {}
});