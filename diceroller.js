const dieRegEx = /^(\d*d\d+|\d+)$/i;


const inputLoc = "diceinput";
const outputLoc = "results";

function run(){
    const input = document.getElementById(inputLoc);
    const output = document.getElementById(outputLoc);

    input.value = standardizeInput(input.value);

    let dice_parts = parseDice(input.value);

    let verify = verifyInput(input.value);

    if (verify.every(element => element == true)){
        passed(output, dice_parts);
    }
    else{
        error(output, verify);
    }    
}

// Reformat input to be standard and easily readable.
function standardizeInput(dice_string){
    let parts = parseDice(dice_string);
    let fixed_str = parts.shift();
    parts.forEach(element => {
        fixed_str += " + " + element;
    });
    return fixed_str;
    
}

// Verifies the entire dice string matches expected formatting.
// Returns array of true/false values showing if a given die string is valid.
function verifyInput(dice_string){
    let parts = parseDice(dice_string);
    let outputArr = parts.map(element => verifyItem(element));
    return outputArr;
}

// Verifies a single dice_string segment against the global die_string Regular Expression.
// Returns true if matched. False if not a match.
function verifyItem(die_string){
    return dieRegEx.test(die_string);
}

// Returns a list of string represented n-sided-die from a formatted string.
function parseDice(dice_string){
    const str_parts = dice_string.replace(/\s+/g,'').split('+');
    return str_parts;
}

// If Input if valid, perform dice operations.
function passed(output, dice_parts){
    output.innerHTML = dice_parts;
}

// If Input is invalid, perform user-facing error handling.
function error(output, verify){
    output.innerHTML = verify;
}

