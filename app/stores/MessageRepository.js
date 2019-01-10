/**
 * Just a class that provides a clean interface for getting data.
 */
export default class MessageRepository {
  _api;

  constructor(api) {
    this._api = api;
  }

  getInboxItems = () => {
    return this._api.get('/inbox').then(response => {
      return response.data;
    });
  };

  getMessages = id => {
    return this._api.get(`/messages/${id}`).then(response => {
      return response.data;
    });
  };
}
