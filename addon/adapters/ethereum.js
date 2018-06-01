import DS from 'ember-data';
import Ethers from 'ethers';

let { providers } = Ethers;

export default DS.Adapter.extend({
  // TODO: move the provider setup into a service and inject that into all the relevant adapters?
  networks: providers.networks,
  providers: providers,

  init() {
    let network = this.network = providers.networks.mainnet;
    let injectedWeb3Provider = window.web3 && window.web3.currentProvider ? window.web3.currentProvider : null;
    this.provider = new providers.FallbackProvider([
      (injectedWeb3Provider ? new providers.Web3Provider(injectedWeb3Provider, network) : new providers.JsonRpcProvider('http://localhost:8545', network)),
      new providers.InfuraProvider(network),
      new providers.EtherscanProvider(network)
    ]);
  }
});
