const text = `
List of all commands:
    Node main.js tree "directoryPath"
    Node main.js organize "directoryPath"
    Node main.js help 
`;

function helpFn() {
    console.log(`%c ${text}`, 'color: green;');
}


module.exports = {
    helpKey: helpFn
}
