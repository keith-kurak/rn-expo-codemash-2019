import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loremIpsum from 'lorem-ipsum-react-native';

const api = axios.create({
  baseURL: `http://localhost:8080`,
});
const mock = new MockAdapter(api, { delayResponse: 750 });

const getSomeLoremIpsum = () => {
  const output = loremIpsum({
    count: 2, // Number of words, sentences, or paragraphs to generate.
    units: 'sentences', // Generate words, sentences, or paragraphs.
    sentenceLowerBound: 4, // Minimum words per sentence.
    sentenceUpperBound: 14, // Maximum words per sentence.
    paragraphLowerBound: 1, // Minimum sentences per paragraph.
    paragraphUpperBound: 1, // Maximum sentences per paragraph.
  });
  return output;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = () => {
  const now = new Date();
  return new Date(getRandomInt(now.getTime() - 500000000, now.getTime()));
};

const getInboxItems = () => {
  const inboxItems = [];
  inboxItems.push({
    id: 0,
    text: getSomeLoremIpsum(),
    user: 'Anne Teak',
    date: getRandomDate(),
    isNew: false,
  });
  inboxItems.push({
    id: 1,
    text: getSomeLoremIpsum(),
    user: 'Chuck Waggon',
    date: getRandomDate(),
    isNew: true,
  });
  inboxItems.push({
    id: 2,
    text: getSomeLoremIpsum(),
    user: 'Dan Druff',
    date: getRandomDate(),
    isNew: false,
  });
  inboxItems.push({
    id: 3,
    text: getSomeLoremIpsum(),
    user: 'Helena Beat',
    date: getRandomDate(),
    isNew: true,
  });
  inboxItems.push({
    id: 4,
    text: getSomeLoremIpsum(),
    user: 'Farris Wheeler',
    date: getRandomDate(),
    isNew: false,
  });
  inboxItems.push({
    id: 5,
    text: getSomeLoremIpsum(),
    user: 'Liv Long',
    date: getRandomDate(),
    isNew: false,
  });
  return inboxItems;
};

// The actual mocks

mock.onGet('/inbox').reply(() => {
  return [200, getInboxItems()];
});

mock.onGet(/\/messages\/\d+/).reply(config => {
  const id = config.url.split('/')[2];
  const inboxItem = getInboxItems().find(i => i.id == id);
  const messages = [];
  for (let i = 0; i < 20; i++) {
    if (getRandomInt(1, 2) === 1) {
      messages.push({
        id: i,
        userType: 'you',
        text: getSomeLoremIpsum(),
        date: getRandomDate(),
        user: 'Your Name',
      });
    } else {
      messages.push({
        id: i,
        userType: 'otherPerson',
        text: getSomeLoremIpsum(),
        date: getRandomDate(),
        user: inboxItem.user,
      });
    }
  }

  return [200, messages];
});

export default api;
