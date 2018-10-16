import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MyButton from '../components/MyButton';
import { ksuPurple, lavenderMist, russianViolet } from '../constants/Colors';

class DeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Deck'),
    };
  };

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const questionsNum = navigation.getParam('questionsNum');

    return (
        <View style={styles.container}>
            <Text style={styles.deckTitle}>
                {title}
            </Text>
            <Text style={styles.deckSubTitle}>
                {questionsNum} {questionsNum === 1 ? 'card' : 'cards'}
            </Text>
            <MyButton color={ksuPurple} title='Add Card' outline />
            <MyButton 
              color={ksuPurple} 
              title='Start Quiz' 
              onPress={() => {
                /* Navigate to the Quiz route with params */
                this.props.navigation.navigate('Quiz', {
                  title,
                });
              }}    
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lavenderMist,
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: russianViolet,
    paddingTop: 80
  },
  deckSubTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: russianViolet,
    paddingBottom: 60
  },
});

export default DeckScreen;