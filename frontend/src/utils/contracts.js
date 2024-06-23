

const contractAddresses = {
    accessControl: "0x1312ABAb29c872c9f70504467EA9273769856a3d",
    allergies:"0xcECA8EEe6E3C02b92745bbfaf92D31C61e0bEf73",
    demographics:"0x2e1bdAa0598CD62c76AAfc71b9A9d9546db7E305",
    immunization:"0xE1FCA1A364FE2A8DaAD5089128bcc1863fec2323",
    insurance:"0xA1bB37c8c1f30d16E5A8c5fD1ae0f0977FdDC46d",
    medicalConditions:"00x98A3486C816f62d4BA70bb4709Aff958C3514C85",
    medications:"0x13f5B4AcCdf0c0f4A65D1289828851a0F08d9a1E",
    medichian: "0x6312C146EF29FA6C4C4E7D054c0F586fA2AA6c80",
    mentalHealth:"0xa92a2E4Ab5A59E4087dD1233285b547f15EcE6f5",
    surgeries:"0x6c3fb00084B98a7b80AfF1A476E3CE0AdED2E6e2"
};

const contractABIs ={
    accessControl: require('../components/build/contracts/AccessControl.json').abi,
    allergies: require('../components/build/contracts/Allergies.json').abi,
    demographics: require('../components/build/contracts/Demographics.json').abi,
    immunization: require('../components/build/contracts/Immunizations.json').abi,
    insurance: require('../components/build/contracts/Insurance.json').abi,
    medicalConditions: require('../components/build/contracts/MedicalConditions.json').abi,
    medications: require('../components/build/contracts/Medications.json').abi,
    medichain: require('../components/build/contracts/Medichain.json').abi,
    mentalHealth: require('../components/build/contracts/MentalHistory.json').abi,
    surgeries: require('../components/build/contracts/Surgeries.json').abi
};

module.exports = {contractAddresses, contractABIs};