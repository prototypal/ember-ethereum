import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    let result = this._super(typeClass, hash);
    result.data.relationships.parent = { data: { type: 'block', id:result.data.attributes.parentHash } };
    debugger
    return result;
  }
});
