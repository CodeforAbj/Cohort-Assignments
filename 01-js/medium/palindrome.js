/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(stri) {
  stri=stri.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
  let str=stri.toLowerCase();
  
  let si=0;
  let ei=str.length-1;
  
  while(si<ei){
    if(str.charAt(si)!==str.charAt(ei))
    {return false;}
    si++;
    ei--;
  }
  return true;
}

module.exports = isPalindrome;
