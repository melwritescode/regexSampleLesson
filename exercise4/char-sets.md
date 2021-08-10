# Introduction to Regular Expressions

## Exercise 4: Character Sets and Negating Character Sets

### Character sets
So far we have learned how to use literal patterns to specify exact matches, and ranges to determine how many matches we’d like to capture. This is all very useful, but still a bit constraining. We can use character classes to add more flexibility to our regular expressions. Character classes uses square brackets `[]` to define a set of characters that we’d like to match. For example, imagine we wanted to find all of the vowels in the following alphabet sentence, or pangram. We could write something like this:

```
const pangram = "The quick brown fox jumps over the lazy dog."

const vowelRegex = /[aeiou]/g

pangram.match(vowelRegex)

/**
returns:

[ 'e', 'u', 'i', 'o','o', 'u', 'o', 'e','e', 'a', 'o']

*/
```

Note that each character included in the character set is considered individually, so the set `[aeiou]` is seeking to match an `a`, or an `e`, or an `i`, and so forth, not the single substring `aeiou`.

### Character sets with character ranges
We can also define a range of characters inside of these brackets. For example, what if given the following string, we wanted to match all words that ended with ‘ug’? We could write an expression like the example below:

```
const rhyme = "As snug as a bug in a rug."

const rhymeRegex = /[a-z]ug/g

rhyme.match(rhymeRegex)

/**
returns:

[ 'nug', 'bug', 'rug' ]

*/
```

This works, sort of. We matched the words 'bug' and 'rug', but we’re only matching part of the word ‘snug’. How could we adjust our regex to match the entire word?

We can simply apply the `+` quantifier that we previously discovered to capture all words that end in ‘ug’ regardless of length:

```
const rhyme = "As snug as a bug in a rug."

const rhymeRegex = /[a-z]+ug/g

rhyme.match(rhymeRegex)

/**
return:

[ 'snug', 'bug', 'rug' ]

*/
```
To build more complex and powerful filters, we'll need to combine multiple modifiers and selectors. We'll be building this skill gradually, throughout the lesson. 

We can also match a range of digits:
```
const oneIsTheLonliest = "1 is the loneliest number that you'll ever do. 2 can be as bad as 1. It's the loneliest number since the number 1."

const numRegex = /[0-9]/g

oneIsTheLonliest.match(numRegex)

/**

returns:

[ '1', '2', '1', '1' ]

*/
```
### Negating character sets
One final thing worth mentioning about character sets, is that you can invert them! Starting a set with the caret (`^`) symbol will match any characters that are not in the character class.

To see this in action let’s return to our previous example using the pangram. This time we’ll use a negated character set to match all of the characters that are not vowels.

```
const pangram = "The quick brown fox jumps over the lazy dog."

const vowelRegex = /[^aeiou]/g

pangram.match(vowelRegex)

/**

return:

[ 'T', 'h', ' ', 'q', 'c', 'k', ' ', 'b', 'r', 'w', 'n', ' ', 'f', 'x', ' ', 'j', 'm', 'p','s', ' ', 'v', 'r', ' ', 't','h', ' ', 'l', 'z', 'y', ' ','d', 'g', '.' ]

*/
```

Note that this regex pattern matched all consonants as well as whitespace characters, and special characters. What if we only wanted to filter letters? We’ll learn how we can specify whitespace in our regex patterns in the next exercise.

But first, let's practice what we've learned so far. Open up `charSets.js` and work through the challenges there.