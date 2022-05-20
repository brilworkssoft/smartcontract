const path = require("path");
const fs = require("fs");
const solc = require("solc");
 
// remember to change line 8 to your
// own file path. Make sure you have your
// own file name or contract name in line
// 13, 28 and 30 as well.
 
const examplePath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(examplePath, "utf-8");
 
var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
 
var interface = output.contracts["Lottery.sol"]["Lottery"].abi;
 
var bytecode = output.contracts['Lottery.sol']["Lottery"].evm.bytecode.object;
 
module.exports = { interface, bytecode };
