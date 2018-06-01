import EthereumAdapter from './ethereum';

export default EthereumAdapter.extend({
  findRecord(store, modelClass, id, snapshot) {
    return this.provider.getTransaction(id).then((res) => {
      res.id = res.hash;
      res.extraData = res.data; // FIXME: Ember Data reserves the `data` attr :/
      return res;
    }, (err) => {
      debugger;
    });
  },

  query(store, modelClass, query) {
    debugger;
    // this.provider.???????
  },

  createRecord() {
    // this.provider.sendTransaction
  }
})