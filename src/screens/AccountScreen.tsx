import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example icon library

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>Larry Anderson</Text>
        <Text style={styles.userStatus}>Dispatcher</Text>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statLabel}>Member since</Text>
            <Text style={styles.statValue}>Nov 2018</Text>
          </View>
          <View>
            <Text style={styles.statLabel}>Lifetime loads</Text>
            <Text style={styles.statValue}>15</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <Icon name="truck" size={24} style={styles.sectionIcon} />
          <View>
            <Text style={styles.sectionTitle}>Apple Express Trucking</Text>
            <View style={styles.companyInfoRow}>
              <View style={styles.companyInfoItem}>
                <Text style={styles.companyInfoLabel}>DOT #</Text>
                <Text style={styles.companyInfoValue}>1234567</Text>
              </View>
              <View style={styles.companyInfoItem}>
                <Text style={styles.companyInfoLabel}>MC #</Text>
                <Text style={styles.companyInfoValue}>123456</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <Icon name="headset" size={24} style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Contact support</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionContainer}>
        <View style={styles.sectionRow}>
          <Icon name="information-outline" size={24} style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Legal</Text>
          <Icon name="chevron-right" size={24} color="#ccc" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.sectionContainer, styles.signOutButton]}>
        <View style={styles.sectionRow}>
          <Icon name="logout" size={24} color="#E53935" style={styles.sectionIcon} />
          <Text style={[styles.sectionTitle, styles.signOutText]}>Sign out</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.appVersion}>App version v1.45.10000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  userInfoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    marginRight: 12,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 16,
  },
  companyInfoRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  companyInfoItem: {
    marginRight: 20,
  },
  companyInfoLabel: {
    fontSize: 12,
    color: '#666',
  },
  companyInfoValue: {
    fontSize: 14,
  },
  signOutButton: {
    borderColor: '#E53935',
    borderWidth: 1,
  },
  signOutText: {
    color: '#E53935',
  },
  appVersion: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    color: '#999',
  },
});

export default AccountScreen;