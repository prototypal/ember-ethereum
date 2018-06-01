import DS from 'ember-data';
import EthereumAdapter from './ethereum';
import RSVP from 'rsvp';

export default EthereumAdapter.extend({
  init() {
    this._super(arguments);
    this.etherscanProvider = new this.providers.EtherscanProvider(this.network);
  },

  findRecord(store, modelClass, id, snapshot) {
    return RSVP.hash({
      balance: this.provider.getBalance(id, 'latest'),
      transactionCount: this.provider.getTransactionCount(id, 'latest'),
    }).then((res) => {
      res.id = id;
      res.history = DS.PromiseArray.create({promise: this.etherscanProvider.getHistory(id, 5714934-10000)});
      return res;
    }, (err) => {
      id;
      debugger;
      throw err;
    });
  }
});
