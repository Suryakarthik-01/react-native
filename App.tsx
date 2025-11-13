import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App