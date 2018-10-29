import { AsyncStorage } from 'react-native';
import { setDummyData } from './helpers';

export const FLAHSCARDS_STORAGE_KEY = 'Flashcards';

export async function getDeck (id) {
  try {
    //await AsyncStorage.removeItem(FLAHSCARDS_STORAGE_KEY)
    const results = await AsyncStorage.getItem(FLAHSCARDS_STORAGE_KEY)
    if (results !== null) {
      // We have data!!
      const data = await JSON.parse(results);
      console.log('inside getDeck, data = ', data, 'id= ', id)
      return data[id];
    } else {
      console.log('AsyncStorage getItem() returned null')
    }
   } catch(err) {
    console.error('AsyncStorage getItem() error inside getDeck() , id = ' + id, err.message);
   }
}

export async function getDecks () {
  try {
    const results = await AsyncStorage.getItem(FLAHSCARDS_STORAGE_KEY);
    let data;
    if (results !== null) {
      // We have data!!
      data = await JSON.parse(results);
      console.log('inside getDecks - we have data! data = ', data);
    } else {
      data = await setDummyData();
      console.log('Setting dummy data');
    }
    return data;
   } catch(err) {
    console.error('AsyncStorage getItem() error inside getDecks() ', err.message);
   }
}

export async function saveDeckTitle (title) {
  try {
    const result = await AsyncStorage.mergeItem(FLAHSCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    }))
    console.log(result);
    return result;
  } catch(err) {
    console.error('AsyncStorage mergeItem() error inside saveDeckTitle() ', err.message);
  }
}

export async function addCardToDeck (title, card) {
  try {
    const result = await AsyncStorage.mergeItem(FLAHSCARDS_STORAGE_KEY, JSON.stringify({
      title: card
    }))
    console.log(result);
    return result;
  } catch(err) {
    console.error('AsyncStorage mergeItem() error inside addCardToDeck() ', err.message);
  }
}

