import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

interface Load {
  id: string;
  price: string;
  miles: string;
  deadhead: string;
  origin: string;
  originDate: string;
  originTime: string;
  destination: string;
  destinationDate: string;
  destinationTime: string;
  vanType: string;
  weight: string;
  distance: string;
}

const dummyLoads: Load[] = [
  {
    id: '1',
    price: '$455',
    miles: '5 mi',
    deadhead: 'deadhead',
    origin: 'Houston, TX',
    originDate: 'Jan 28',
    originTime: '14:30 CST',
    destination: 'San Antonio, TX',
    destinationDate: 'Jan 29',
    destinationTime: '18:00 CST',
    vanType: 'Van',
    weight: '42k lbs',
    distance: '197 mi total',
  },
  {
    id: '2',
    price: '$465',
    miles: '5 mi',
    deadhead: 'deadhead',
    origin: 'Houston, TX',
    originDate: 'Jan 28',
    originTime: '14:30 CST',
    destination: 'San Antonio, TX',
    destinationDate: 'Jan 29',
    destinationTime: '18:00 CST',
    vanType: 'Van',
    weight: '46.3k lbs',
    distance: '197 mi total',
  },
  // Add more dummy data as needed
];

const BookScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [searchText, setSearchText] = useState('');

  const renderLoadItem = ({ item }: { item: Load }) => (
    <View style={styles.loadItemContainer}>
      <View style={styles.loadItemHeader}>
        <Text style={styles.loadPrice}>{item.price}</Text>
        <Text style={styles.loadDetailsRight}>{`${item.vanType} - ${item.weight}`}</Text>
      </View>
      <View style={styles.loadItemSubHeader}>
        <Text style={styles.loadMiles}>{item.miles}</Text>
        <Text style={styles.loadDeadhead}>{item.deadhead}</Text>
        <Text style={styles.loadDetailsRight}>{item.distance}</Text>
      </View>
      <View style={styles.loadLocationContainer}>
        <View style={styles.locationMarker}>
          <View style={styles.originMarker} />
          <View style={styles.line} />
          <View style={styles.destinationMarker} />
        </View>
        <View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText}>{item.origin}</Text>
            <Text style={styles.locationDate}>{`${item.originDate}, ${item.originTime}`}</Text>
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText}>{item.destination}</Text>
            <Text style={styles.locationDate}>{`${item.destinationDate}, ${item.destinationTime}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Book</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#3B82F6' },
          }}
          theme={{
            dotColor: '#3B82F6',
            selectedDayBackgroundColor: '#3B82F6',
            arrowColor: 'black',
            todayTextColor: '#3B82F6',
          }}
        />
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Near You"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Today</Text>
        <TouchableOpacity>
          <Text style={styles.sortButton}>Sort: Suggested</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dummyLoads}
        renderItem={renderLoadItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.loadList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  calendarContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sortButton: {
    fontSize: 14,
    color: '#3B82F6',
  },
  loadList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loadItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  loadItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  loadPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  loadDetailsRight: {
    fontSize: 12,
    color: '#666',
  },
  loadItemSubHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  loadMiles: {
    fontSize: 12,
    marginRight: 10,
    color: '#666',
  },
  loadDeadhead: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    marginRight: 10,
  },
  loadLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationMarker: {
    alignItems: 'center',
    marginRight: 15,
  },
  originMarker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  line: {
    width: 1,
    height: 30,
    backgroundColor: '#000',
  },
  destinationMarker: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
  },
  locationTextContainer: {
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDate: {
    fontSize: 12,
    color: '#666',
  },
});

export default BookScreen;