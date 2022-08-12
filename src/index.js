const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const array = [];
    let oneletter = ''
    for(let i =0; i<expr.length; i++){
        oneletter += expr[i];
        if(oneletter.length === 10){
            array.push(oneletter);
            oneletter = '';
        }
    }
    const arr = array.map(val => val.replaceAll('11','-').replaceAll('10', '.').replaceAll('00','').replaceAll('**********',' '));
    return arr.map(val => val === ' ' ? val : MORSE_TABLE[val]).join('');
}


module.exports = {
    decode
}