import DS from 'ember-data';

export default DS.Model.extend({
  hash: DS.attr(),
  blockHash: DS.belongsTo('block'),
  blockNumber: DS.attr(),
  transactionIndex: DS.attr(),
  from: DS.belongsTo('account'),
  gasPrice: DS.attr(),
  gasLimit: DS.attr(),
  to: DS.belongsTo('account'),
  value: DS.attr(),
  nonce: DS.attr(),
  extraData: DS.attr(),
  r: DS.attr(),
  s: DS.attr(),
  v: DS.attr(),
  creates: DS.attr(),
  raw: DS.attr(),
  networkId: DS.attr(),
});
