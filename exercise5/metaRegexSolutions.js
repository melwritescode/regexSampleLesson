/**
Use what you've learned about regular expressions in the past three lessons to solve the following challenges. 

For this set of challenges, unless otherwise mentioned, all matches should be case insensitive.
 */

const recipe = "The recipe called for 2 cups of sugar, 4 cups of flour, 1 stick of butter and 3 eggs."

const misspellings = "candy candi cande cand3 candI canada cand"

const contactInfo = "800 555 1234 \n email@business.net"

const seussRhyme = "I have a cat. He lives on a mat. He wears a tiny hat, and loves his toy bat. I gave him a pat when he caught a big rat."

const internetSpeak = "Wh@+'s +h3 4!!?"

// 1. Match all of the numbers in the string `recipe`.

const allDigits = /\d/g
recipe.match(allDigits)

// 2. Find the correct spelling and all potential typos of the word 'candy' at the last character in the string `misspellings`.

const candyTypo = /cand\w/g
misspellings.match(candyTypo)

// 3. Match all of the white space characters in the string `contactInfo`. 

const whitespace = /\s/g
contactInfo.match(whitespace)

// Use the wildcard character to match all three letter words that end in 'at' in the string.

const atWords = /.at/g
seussRhyme.match(atWords)

// Use character groups and escape to find all characters that are not special characters. Your matches should include any `@`, `+`, `?`, and `!` symbols. Some but not all of these characters will need to be escaped.

const noSymbols = /[@\+\?!]/g
internetSpeak.match(noSymbols)