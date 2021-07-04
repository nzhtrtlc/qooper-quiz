function solution(S) {

  let largest = 'a';
  let hasLargest = false;

  const arrayOfChars = S.split('');

  // find largest alphabet
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    char = char.toLowerCase();

    // pass if char is not in english alphabet
    if (char.charCodeAt() < 97 || char.charCodeAt() > 122){
      continue;
    }
    
    // check if char has both lower and upper cases.
    const includesBothCase = arrayOfChars.includes(char) && arrayOfChars.includes(char.toUpperCase())
    
    if (includesBothCase && char.charCodeAt() > largest.charCodeAt()) {
      largest = char;
      hasLargest = true;
    }
  }
  return hasLargest ? largest.toUpperCase() : 'NO';
}
