import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoadItem from '../components/LoadItem';
import { Load } from '../types/Load';

const Tab = createMaterialTopTabNavigator();

const dummyLoads: Load[] = [
  {
    id: '1',
    price: '$465',
    origin: 'Houston, TX',
    originDate: 'Jan 28, 14:30 CST',
    destination: 'San Antonio, TX',
    destinationDate: 'Jan 29, 18:00 CST',
    status: 'En route',
    distance: '5 mi',
    deadhead: 'deadhead',
  },
  {
    id: '2',
    price: '$470',
    origin: 'Houston, TX',
    originDate: 'Jan 29, 10:30 CST',
    destination: 'San Antonio, TX',
    destinationDate: 'Jan 18, 15:00 CST',
    status: 'Completed',
    distance: '5 mi',
    deadhead: 'deadhead',
  },
];

const BookedLoadsScreen: React.FC = () => {
  const inProgressLoads = dummyLoads.filter(load => load.status === 'En route');
  const completedLoads = dummyLoads.filter(load => load.status === 'Completed');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>In-Progress</Text>
      {inProgressLoads.map(load => (
        <View key={load.id}>
          <Text style={styles.statusText}>{load.status}</Text>
          <LoadItem load={load} />
        </View>
      ))}
      {completedLoads.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Completed</Text>
          {completedLoads.map(load => (
             <LoadItem key={load.id} load={load} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const PastLoadsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.comingSoonText}>Past Loads Coming Soon!</Text>
    </View>
  );
};

const MyLoadsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
        }}
      >
        <Tab.Screen name="Booked" component={BookedLoadsScreen} />
        <Tab.Screen name="Past" component={PastLoadsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabIndicator: {
    backgroundColor: '#000',
    height: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  comingSoonText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default MyLoadsScreen;