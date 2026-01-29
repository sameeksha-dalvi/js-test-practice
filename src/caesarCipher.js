function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = char.charCodeAt(0);//get ascii value

    
    if (code >= 97 && code <= 122) {
      let newCode = code + shift;

      if (newCode > 122) {
        newCode = newCode - 26;// go back to the beginning of the alphabet if we go past z
      }

      result += String.fromCharCode(newCode);
    }

   
    else if (code >= 65 && code <= 90) {
      let newCode = code + shift;

      if (newCode > 90) {
        newCode = newCode - 26;// go back to the beginning of the alphabet if we go past Z
      }

      result += String.fromCharCode(newCode);//convert back to char
    }

    
    else {
      result += char;
    }
  }

  return result;
}

export default caesarCipher;