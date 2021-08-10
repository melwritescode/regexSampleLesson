# Introduction to Regular Expressions

## Exercise 5: Metacharacters, wildcard, and escaping characters

In the previous exercise, we learned to use character sets to give our regular expressions more flexibility. We learned that we can use character sets to specify a range of characters or digits that we want to include in our pattern. Similarly, metacharacters allow us to select groups or categories of characters within a regular expression. There are many metacharacters that are available to us. Here we’ll just focus on a handful that you’ll likely see most often.

### Find a digit

We can select all digits in a string of text using the `\d` metacharacter. Check out an example below:

```
const oneIsTheLonliest = "1 is the loneliest number that you'll ever do. 2 can be as bad as 1. It's the loneliest number since the number 1."

const numRegex = /\d/g

oneIsTheLonliest.match(numRegex)

/**
returns:

[ '1', '2', '1', '1' ]

*/

```

Previously, we used the character set `[0-9]` to match all digits. Using the `\d` metacharacter offers us a shorthand way of doing the same thing.

### Find a word character

In the last exercise, we also used character sets to find all letters in a string. We can use the `\w` metacharacter to match all word characters. Keep in mind that word characters include all alphanumeric characters (a-z, A-Z, and 0-9) as well as the underscore character (_). Depending on the pattern we are building, it may be more appropriate to use the `\w` metacharacter, or to specify a character range using character sets `[a-z]`.

Take a look at an example of the word metacharacter in action:
```
const pangram = "The quick brown fox jumps over the lazy dog."

const wordRegex = /\w/g

pangram.match(wordRegex)

/**
returns:

[ 'T', 'h', 'e', 'q', 'u', 'i', 'c','k', 'b', 'r', 'o', 'w', 'n', 'f','o','x', 'j', 'u', 'm', 'p', 's','o', 'v', 'e', 'r', 't', 'h', 'e','l', 'a', 'z', 'y', 'd', 'o', 'g' ]

*/
```

  

Note that our return array includes all letters, but ignores white space and the period character.

### Find white space

The last metacharacter we’ll cover here is the whitespace metacharacter. This allows us to match any type of white space in our string. Whitespace characters include spaces, tabs, and new lines. 

If we wanted to select all of the whitespace in our pangram string we could construct the following expression:

```
const pangram = "The quick brown fox jumps over the lazy dog."

const wordRegex = /\s/g

pangram.match(wordRegex)

/**
returns:

[ ' ', ' ', ' ',' ', ' ', ' ',' ', ' ' ]

*/
```

### Match metacharacter inverse

It is worth noting that for all of these metacharacters, we can also select their inverse using the capitalized version. For example if we wanted to select all *non-word* characters (whitespace and special characters, except the underscore character) in a string, we could create the following regex pattern:

```
const lettersAndSymbols = "W3lc0m3 t0 th3 r3@l w0rld!"

const nonWordRegex = /\W/g

lettersAndSymbols.match(nonWordRegex)

/**
returns:

[ ' ', ' ', ' ', '@', ' ', '!' ]

*/
```

Let’s look at the same string, this time selecting all non-digit characters:

```
const lettersAndSymbols = "W3lc0m3 t0 th3 r3@l w0rld!"

const nonDigitRegex = /\D/g

lettersAndSymbols.match(nonDigitRegex)

/**
returns:

[ 'W', 'l', 'c', 'm', ' ','t', ' ', 't', 'h', ' ','r', '@', 'l', ' ', 'w','r', 'l', 'd', '!' ]

*/
```

### Match any character with the wildcard  

Sometimes there's no way to know exactly what character we need to match. For example, imagine we are building an autocorrect program and need to match multiple permutations of a misspelling. Factoring every potential misspelling into a regular expression could be a cumbersome challenge. Fortunately, we can conserve our energy by using the wildcard character `.` to match any single character.

For example, we can capture all the words in the following string, by using the wildcard character to match the middle character:

```
const hWords = "hot hat hit hut h@t h0t h!t"

const wildRegex = /h.t/g

console.log(hWords.match(wildRegex))

/**
returns:

[ 'hot', 'hat','hit', 'hut','h@t', 'h0t','h!t' ]

*/
```

### Escaping characters with `\`

The wildcard character is an incredibly useful tool, but it begs the question: what if we need to match the actual period character in a string of text? As we just saw, simply typing a `.` will match any character so we can't rely on that as an option. Thankfully, another useful tool regex gives us is the ability to escape characters. We can use the backslash before any special character to include it in our regex pattern. 

For example, to match all of the period characters in a string, we could use the following regular expression:

```
const dotString = "Once upon a time in a land far, far away..."

const dotRegex = /\./g

dotString.match(dotRegex)

/**
returns:

[ '.', '.', '.' ]

*/
```

This example matches all of the period characters in our string. Some other characters we have to escape include the backslash itself (`\`), brackets (`[]`), parenthesis ( `()`), quantifiers like `*, +, ?` and many more.

Practice what you've learned by completing the challenges in `metaRegex.js`.