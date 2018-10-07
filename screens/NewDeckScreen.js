import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ksuPurple, lavenderMist, russianViolet } from '../constants/Colors';
import MyButton from '../components/MyButton';

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  state = {
    title: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What is the title of your new deck?
        </Text> 
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <MyButton title='Submit' color={ksuPurple}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: lavenderMist,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: russianViolet,
  },
  textInput: {
    height: 40, 
    borderColor: russianViolet, 
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    alignSelf: 'stretch',
  }
});
