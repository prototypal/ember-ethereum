import DS from 'ember-data';
import Ethers from 'ethers';

let { providers } = Ethers;

export default DS.Adapter.extend({
  init() {
    let network = providers.networks.ropsten;
    let injectedWeb3Provider = window.web3 && window.web3.currentProvider ? window.web3.currentProvider : null;
    this.provider = new providers.FallbackProvider([
      (injectedWeb3Provider ? injectedWeb3Provider : new providers.JsonRpcProvider('http://localhost:8545', network)),
      new providers.InfuraProvider(network),
      new providers.EtherscanProvider(network)
    ]);
  },

  findRecord(store, modelClass, id, snapshot) {
    return this.provider.getTransaction(id).then((res) => {
      res.id = res.hash;
      res.extraData = res.data; // FIXME: Ember Data reserves the `data` attr :/
      return res;
    }, (err) => {
      debugger;
    });
  },

  query() {
    debugger;
  }
});
