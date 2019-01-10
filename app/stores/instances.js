import api from './api';
import MessageRepository from './MessageRepository';

/**
 * "Composition root" for my data layer (which is really just a repo).
 * I use this instance of the repo wired up to the mock API
 * everywhere where I need data.
 */

const messageRepository = new MessageRepository(api);

export { messageRepository };
