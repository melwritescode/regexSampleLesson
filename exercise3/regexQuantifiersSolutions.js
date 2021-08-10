/**
Use what you've learned about regular expressions in the past two lessons to solve the following challenges. 

For this set of challenges, unless otherwise mentioned, all matches should be case insensitive.
 */

const peterPiper = "Peter Piper picked a peck of piiiickled peppppers."

// 1. Find all matches where the letter 'p' occurs once or more in the string `peterPiper`.

const oneOrMoreP = /p+/gi
peterPiper.match(oneOrMoreP)

// 2. Find all matches where the letter 'p' followed by zero or more 'e's occurs in the string `peterPiper`.

const zeroOrMoreE = /pe*/gi
peterPiper.match(zeroOrMoreE)

// 3. Find all matches in the string `peterPiper` where the letter 'p' occurs followed by zero or one 'i'.

const zeroOrOneI = /pi?/gi
peterPiper.match(zeroOrOneI)

// 4. Find all matches in the string `peterPiper` where the letter 'p' is followed by at least two 'i's. 

const twoOrMoreI = /pi{2}/gi
peterPiper.match(twoOrMoreI)

// 5. Find all matches in the string `peterPiper` where the letter 'e' is followed by between two and four 'p's.

const twoToFourP = /ep{2,4}/gi
peterPiper.match(twoToFourP)