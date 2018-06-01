import DS from 'ember-data';

export default DS.Model.extend({
  hash: DS.attr(),
  parentHash: DS.attr(),
  number: DS.attr(),
  timestamp: DS.attr(),
  nonce: DS.attr(),
  difficulty: DS.attr(),
  gasLimit: DS.attr(),
  gasUsed: DS.attr(),
  miner: DS.attr(),
  extraData: DS.attr(),
  transactions: DS.attr()
});
