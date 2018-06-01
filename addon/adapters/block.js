import EthereumAdapter from './ethereum';

export default EthereumAdapter.extend({
  findRecord(store, modelClass, id, snapshot) {
    return this.provider.getBlock(id).then((res) => {
      res.id = res.hash;
      return res;
    }, (err) => {
      debugger;
    });
  }
});
