const validInput = {'(':')', '[':']', '{':'}'};
const isValid = (string, i=0, newArray = []) => {
    if (i === string.length) {
      console.log('valid input');
        return true;
    }
    if (string.charAt(i) === '(' || string.charAt(i) === '[' || string.charAt(i) === '{') {
       let value = string.charAt(i);
        console.log('value is ', value, 'and validInput.value is', validInput[value]);
        newArray.push(string.charAt(i));
        i = i + 1;
        if (string.charAt(i) === validInput[value]) {
            return isValid(string, i+1);
        } else {
          console.log('after checking second character, invalid input');
            return false;
        }
    } else {
      console.log('after checking first character, invalid input');
        return false;
    }
};

isValid('([])'); //invalid
isValid('(){}[]'); //valid
