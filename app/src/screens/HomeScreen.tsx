import React from 'react';
import {Button, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  const loaded = React.useRef(false);
  const [item, setItem] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    if (loaded.current) {
      if (item === '' || item.trim() === '') {
        setIsValid(false);
      } else if (item.length > 255) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      loaded.current = true;
    }
  }, [item]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Stash App</Text>
      <TextInput
        style={isValid ? styles.validInput : styles.invalidInput}
        placeholder="Enter item"
        onChangeText={setItem}
        value={item}
      />
      <Button title="Stash It" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 70,
  },
  validInput: {
    height: 60,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    fontSize: 16,
  },
  invalidInput: {
    height: 60,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    fontSize: 16,
  },
  button: {
    height: 30,
  },
});

export default HomeScreen;
