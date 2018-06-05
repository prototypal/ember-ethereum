import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    let txs = hash.transactions;
    let result = this._super(typeClass, hash);
    //result.data.relationships.parent = { data: { type: 'block', id:result.data.attributes.parentHash } };
    //result.data.relationships.transactions = { data: txs.map((tx) => ({ id: tx, type: 'transaction'}))}
    //delete result.data.attributes.transactions;
    return result;
  }
});