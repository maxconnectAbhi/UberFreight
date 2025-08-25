import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoadItemProps {
  price: string;
  distance?: string;
  deadhead?: string;
  origin: string;
  originDate: string;
  originTime: string;
  destination: string;
  destinationDate: string;
  destinationTime: string;
  vanDetails?: string;
  weightDetails?: string;
  totalDistance?: string;
}

const LoadItem: React.FC<LoadItemProps> = ({
  price,
  distance,
  deadhead,
  origin,
  originDate,
  originTime,
  destination,
  destinationDate,
  destinationTime,
  vanDetails,
  weightDetails,
  totalDistance,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.price}>{price}</Text>
        {(distance || deadhead) && (
          <View style={styles.detailsRow}>
            {distance && <Text style={styles.detailText}>{distance} mi</Text>}
            {deadhead && <Text style={styles.detailText}>{deadhead}</Text>}
          </View>
        )}
        {(vanDetails || weightDetails || totalDistance) && (
          <View style={styles.detailsRight}>
            {vanDetails && <Text style={styles.detailTextRight}>{vanDetails}</Text>}
            {weightDetails && <Text style={styles.detailTextRight}>{weightDetails}</Text>}
            {totalDistance && <Text style={styles.detailTextRight}>{totalDistance} total</Text>}
          </View>
        )}
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationMarkerContainer}>
          <View style={styles.originMarker} />
          <View style={styles.line} />
          <View style={styles.destinationMarker} />
        </View>
        <View style={styles.locationTextContainer}>
          <View>
            <Text style={styles.locationText}>{origin}</Text>
            <Text style={styles.dateText}>{originDate}, {originTime}</Text>
          </View>
          <View style={styles.destinationRow}>
            <Text style={styles.locationText}>{destination}</Text>
            <Text style={styles.dateText}>{destinationDate}, {destinationTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080', // Using a deep blue color
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#888',
    marginRight: 8,
  },
  detailsRight: {
    alignItems: 'flex-end',
  },
  detailTextRight: {
    fontSize: 12,
    color: '#888',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationMarkerContainer: {
    alignItems: 'center',
    marginRight: 12,
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
    backgroundColor: '#ccc',
    marginVertical: 4,
  },
  destinationMarker: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
  },
  locationTextContainer: {
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  destinationRow: {
    marginTop: 8,
  },
});

export default LoadItem;