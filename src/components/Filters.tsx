import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  filter: string;
  onChangeFilter: (value: string) => void;
  total: number;
  completed: number;
  pending: number;
}

const Filters: React.FC<Props> = ({
  filter,
  onChangeFilter,
  total,
  completed,
  pending,
}) => {
  const filters = [
    { key: 'ALL', label: `All (${total})` },
    { key: 'PENDING', label: `Pending (${pending})` },
    { key: 'COMPLETED', label: `Completed (${completed})` },
  ];

  return (
    <View style={styles.row}>
      {filters.map(f => (
        <TouchableOpacity
          key={f.key}
          style={[styles.btn, filter === f.key && styles.active]}
          onPress={() => onChangeFilter(f.key)}
        >
          <Text style={[styles.text, filter === f.key && styles.activeText]}>
            {f.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 20,
  },

  btn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: '#f8f9fc',
    borderWidth: 1.5,
    borderColor: '#e1e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  active: {
    backgroundColor: '#1B3B6F',
    borderColor: '#1B3B6F',
    elevation: 4,
    shadowColor: '#1B3B6F',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  text: {
    color: '#64748b',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.3,
    textAlign: 'center',
  },

  activeText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
