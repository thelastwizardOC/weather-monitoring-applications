import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Modal from "react-native-modal";
import DateField from 'react-native-datefield';

export default function Report({ navigation }) {

  const [modalOpen, setModelOpen] = useState(false);

  return (
    <View style={styles.container} onPress={() => setModelOpen(false)}>
      <TouchableOpacity style={styles.button}
        onPress={() =>
          navigation.navigate('YesterdayReport', {
            type: 'yesterday'
          })
        }
      >
        <Text style={styles.text}>Yesterday</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() =>
          navigation.navigate('LastWeekReport', {
            type: 'lastweek'
          })
        }
      >
        <Text style={styles.text}>Last Week</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => setModelOpen(true)}>
        <Text style={styles.text}>Day lookup</Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalOpen}
        onBackdropPress={() => setModelOpen(false)}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <DateField
            labelDate="Date"
            labelMonth="Month"
            labelYear="Year"
            maximumDate={new Date()}
            styleInput={styles.input}
            onSubmit={value => {
              setModelOpen(false);
              navigation.navigate('DateReport', {
                date: value,
                type: 'date'
              })
            }
            }
            containerStyle={styles.dateContainer}
          />
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 40,
    marginRight: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundImage: 'linear-gradient(to right, #6b8cd9 0%, #182848  51%, #4b6cb7  100%)'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  modal: {
    backgroundColor: 'white',
    marginTop: 300,
    marginBottom: 300,
    marginLeft: 50,
    marginRight: 50
  },
  modalContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    width: '30%',
    height: 30,
    borderRadius: 10,
    borderColor: '#cacaca',
    borderWidth: 1,
  },
  dateContainer: {
    marginLeft: 10,
    marginRight: 10
  }
})
