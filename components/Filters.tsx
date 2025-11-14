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
    justifyContent: 'space-evenly',
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    backgroundColor: '#e9eef7',
    borderWidth: 1,
    borderColor: '#d0d8e8',

    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },

  active: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    elevation: 4,
    shadowColor: '#007bff',
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  text: {
    color: '#333',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
});
