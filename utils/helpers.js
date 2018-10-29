import { AsyncStorage } from 'react-native';
import { FLAHSCARDS_STORAGE_KEY } from './api';

export async function setDummyData () {
    const dummyData = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        },
    };

    try {
      return await AsyncStorage.setItem(FLAHSCARDS_STORAGE_KEY, JSON.stringify(dummyData));
    } catch (error) {
      console.error('AsyncStorage setItem() error: ' + error.message);
    }
}