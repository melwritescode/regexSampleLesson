# Introduction to Regular Expressions

## Exercise 2: Matching Simple Patterns In RegEx

### Simple regex patterns
Matching exact patterns in regex is fairly straightforward. All regex expressions in JavaScript must consist of two backslashes `/`, in between which, we’d write our search pattern.

For example, let’s search a string of text for the word “the”. We can use JavaScript’s built-in string method, `.match()`,  to execute our regex on the string and have any complete matches returned to us.

```

const thStr = "On Thursday Theresa went to the store, and there she had the most brilliant thought."

const theRegex = /the/

thStr.match(theRegex)

/**

returns:

[

'the',

index: 28,

input: 'On Thursday Theresa went to the store, and there she had the most brilliant thought.',

groups: undefined

]

*/

```

If we execute this code, it returns an array with the first match, along with the input string itself, and where in this string the match is located. This is great, but doing a quick analysis of the string on our own, we can see that the substring “the” occurs multiple times in the sentence, not just once.

### Modifying expressions with flags

To match all occurrences of the substring “the”, we’ll need to add a flag to our regex statement. There are many optional flags we can include in a regular expression. First, we’ll focus on one that is very common, and that you’ll likely find yourself using often: the global flag, `g`. Tacking this on to the end of a regular expression allows us to search a string for every occurrence of the provided search pattern, not just the first one.

Consider the previous example, but with a global flag appended:

```
const thStr = "On Thursday Theresa went to the store, and there she had the most brilliant thought."

const theRegex = /the/g

thStr.match(theRegex)

/**

returns:

[ 'the', 'the', 'the' ]

*/
```

Now we are returning three instances of the string “the”, which match the bolded occurrences in our string, respectively: "On Thursday Theresa went to **the** store, and **the**re she had **the** most brilliant thought."

This looks pretty good, but it still doesn’t feel complete. “Theresa” also starts with the letters “the”. Shouldn’t it be matched in our test? There is another flag that will likely prove very useful to us, and that is the case insensitive flag, `i`. This will capture any substrings that match the provided pattern, ignoring letter casing.

Check out the following revision to the previous examples:

```
const thStr = "On Thursday Theresa went to the store, and there she had the most brilliant thought."

const theRegex = /the/gi

thStr.match(theRegex)

/**

returns:

[ 'The', 'the', 'the', 'the' ]

*/

```

Now, we can see that our return array includes the “The” as a substring of “Theresa”.

Time for some practice! Open up the file `simplePatterns.js`. Use regex to solve each of the challenges.