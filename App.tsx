import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Text style={styles.text}>Current Env: {Config.ENV}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
