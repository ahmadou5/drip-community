export const buddySystemAddress = "0x39027379F0e3835f8A3C4E6cf5e96777De0894A6";
export const buddySystemAbi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "buddy",
        "type": "address"
    }],
    "name": "onUpdateBuddy",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "player",
        "type": "address"
    }],
    "name": "buddyOf",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "player",
        "type": "address"
    }],
    "name": "buddyOft",
    "outputs": [{
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "buddy",
        "type": "address"
    }],
    "name": "updateBuddy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]