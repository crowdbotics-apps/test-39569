import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MetricsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Metrics</Text>
      </View>
      <View style={styles.metricsContainer}>
        <View style={styles.metric}>
          <Image source={require('../assets/icons/steps.png')} style={styles.icon} />
          <Text style={styles.metricText}>10,000 Steps</Text>
        </View>
        <View style={styles.metric}>
          <Image source={require('../assets/icons/miles.png')} style={styles.icon} />
          <Text style={styles.metricText}>5 Miles</Text>
        </View>
        <View style={styles.metric}>
          <Image source={require('../assets/icons/stairs.png')} style={styles.icon} />
          <Text style={styles.metricText}>20 Stairs Climbed</Text>
        </View>
        <View style={styles.metric}>
          <Image source={require('../assets/icons/calories.png')} style={styles.icon} />
          <Text style={styles.metricText}>500 Calories Burned</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  metricsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  metricText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71'
  }
});
export default MetricsScreen;