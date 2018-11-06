import { AsyncStorage } from 'react-native';
import { setDummyData } from './helpers';

export const FLAHSCARDS_STORAGE_KEY = 'Flashcards:decks';
export const NOTIFICATION_KEY = 'Flashcards:notifications';

export async function getDeck (id) {
  try {
    const results = await AsyncStorage.getItem(FLAHSCARDS_STORAGE_KEY)
    if (results !== null) {
      // We have data!!
      const data = await JSON.parse(results);
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
    //uncomment the next line to reset the app to the original data
    //await AsyncStorage.removeItem(FLAHSCARDS_STORAGE_KEY);
    const results = await AsyncStorage.getItem(FLAHSCARDS_STORAGE_KEY);
    let data;
    if (results !== null) {
      // We have data!!
      data = await JSON.parse(results);
    } else {
      data = await setDummyData();
    }
    return data;
   } catch(err) {
    console.error('AsyncStorage getItem() error inside getDecks() ', err.message);
   }
}

export async function saveDeckTitle (title) {
  try {
    await AsyncStorage.mergeItem(FLAHSCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    }));
  } catch(err) {
    console.error('AsyncStorage mergeItem() error inside saveDeckTitle() ', err.message);
  }
}

export async function addCardToDeck (title, card) {
  const deck = await getDeck(title);
  const updatedQuestions = [...deck.questions, card];

  try {
    await AsyncStorage.mergeItem(FLAHSCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: updatedQuestions,
      }
    }));
  } catch(err) {
    console.error('AsyncStorage mergeItem() error inside addCardToDeck() ', err.message);
  }
}

