import api from './api';
import MessageRepository from './MessageRepository';

const messageRepository = new MessageRepository(api);

export { messageRepository };
