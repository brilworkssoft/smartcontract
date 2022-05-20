const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'insect dumb pattern action pupil notable moment sing enough label base decade',
    'https://rinkeby.infura.io/v3/fd70c67e001948d9b246a1d1b6404805'
)
const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy accounts', accounts);

    const result = await new web3.eth.Contract(interface)
        .deploy({data: bytecode})
        .send({ from: accounts[0], gas:'1000000'});
    
    console.log('Contract deployed to', result.options.address);

    provider.engine.stop();
};

deploy();