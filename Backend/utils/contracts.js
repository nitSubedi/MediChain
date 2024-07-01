

const contractAddresses = {
    accessControl: "0xF222AF5F03D27E9CcFd3d2FF8953bA3C3B684C5b",
    allergies:"0xA518D7EACa45B59Ea1b7008b2F28C9952aD51ccc",
    demographics:"0xCC13Abb4f63727818a26964C321089e286EB859a",
    immunization:"0xC54fFbe26648bF56B65DDDa464CA286560b1BbA5",
    insurance:"0x70F5AC5A10e906E00813a4E991837Fb08D83F7C6",
    medicalConditions:"0x3018d684a91eB9AD8260FAba94687954b040E0D4",
    medications:"0xd0820EAc802aD1B7675E34439bD40673847Fc313",
    medichain: "0x85aD6f209d839cC25dB4dB1EAC218AAc0b4C1c86",
    mentalHealth:"0xd725B9c44e925e8eE3dC41dFcd7cb18Cf3341A23",
    surgeries:"0x16F717c3aE469db9A85c8dF9Fb1EaC9d98632487"
};

const contractABIs ={
    accessControl: require('../../build/contracts/AccessControl.json').abi,
    allergies: require('../../build/contracts/Allergies.json').abi,
    demographics: require('../../build/contracts/Demographics.json').abi,
    immunization: require('../../build/contracts/Immunizations.json').abi,
    insurance: require('../../build/contracts/Insurance.json').abi,
    medicalConditions: require('../../build/contracts/MedicalConditions.json').abi,
    medications: require('../../build/contracts/Medications.json').abi,
    medichain: require('../../build/contracts/Medichain.json').abi,
    mentalHealth: require('../../build/contracts/MentalHistory.json').abi,
    surgeries: require('../../build/contracts/Surgeries.json').abi
};

module.exports = {contractAddresses, contractABIs};