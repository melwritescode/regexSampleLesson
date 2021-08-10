/**
Use what you've learned about regular expressions in the past three lessons to solve the following challenges. 

For this set of challenges, unless otherwise mentioned, all matches should be case insensitive.
 */

 const pangram = "Five or six big red jet planes zoomed quickly by the tower."

 const numSentence = "1 + 1 = 2 and 2 * 2 = 4."
 
 const qString = "The Queen quietly and quickly made a quip about quilts."
 
 const shortRhyme = "There once was a mouse who lived in a house. Her neighbor was a grouse who wore a pink blouse."
 
 const numsLettsChars = "W3lc0m3 +0 +h3 p@r+y!"
 
 // 1. Match all vowels in the string `pangram`.
 
 const vowelRegex = /[aeiou]/gi
 pangram.match(vowelRegex)
 
 // 2. Match all of the numbers in the string `numberSentence`.
 
 const numRegex = /[0-9]/gi
 numSentence.match(numRegex)
 
 // 3. Find all the words in the `qString` string that start with the letter 'q'. You will need to use a quanitifier.
 
 const qRegex = /q[a-z]+/gi
 qString.match(qRegex)
 
 // 4. Find all words in the string `shortRhyme` that end in the substring 'ouse'. You will need to use character sets with character ranges, as well as a quantifier.
 
 const ouseRegex = /[b-r]{0,2}ouse/gi
 shortRhyme.match(ouseRegex)
 
 // 5. Find all matches in the string `numsLettsChars` that are not numbers or letters. Your matches should include any special characters or whitespaces.
 
 const nonAlphanumeric = /[^0-9a-z]/gi
 numsLettsChars.match(nonAlphanumeric)