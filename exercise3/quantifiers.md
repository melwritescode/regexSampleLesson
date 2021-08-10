# Introduction to Regular Expressions

## Exercise 3: Quantifiers in Regular Expressions

### Match one or more occurences with `+`
Matching exact patterns definitely has its uses, but on its own it’s not incredibly powerful, and feels a bit restrictive. With the use of quantifiers in regular expressions, we can specify how many instances of a substring we want to search for.

For example, what if we were given the following alliteration and wanted to find all of the matches where the letter ‘o’ occurs one or more times? With regular expressions we can achieve this using the plus (`+`) sign. Using this symbol allows us to match any character that precedes it at least once, but up to as many times as it occurs consecutively. Let’s take a look at an example:

```
const woodchuck = "How much wood would a woodchuck chuck if a woodchuck could chuck wooood?"

const oRegex = /o+/g

woodchuck.match(oRegex)

/**
returns:

[ 'o', 'oo', 'o', 'oo', 'oo', 'o', 'oooo']

*/
```

Remember that we have to use the `g` flag if we want to return all matches in the string. The `.match()` method filters out all of the matches where the letter 'o' occurs one or more times consecutively. We can see all of our matches as they occur in the sentence here in bold: H**o**w much w**oo**d w**o**uld a w**oo**dchuck chuck if a w**oo**dchuck c**o**uld chuck w**oooo**d?

### Matching zero or more occurences with `*`

Now let’s imagine we wanted to instead look for the letter ‘w’, and, *if* it is ever followed by the letter 'o', capture that as well. Here, we can use the asterisk (`*`) symbol, like this: `wo*`. With this pattern, the 'o' is optional. All ‘w’s will be matched, and if any 'w's are followed by one or more ‘o’s, that sequence will be matched as well. Consider the following example:

```
const woodchuck = "How much wood would a woodchuck chuck if a woodchuck could chuck wooood?"

const oRegex = /wo*/g

woodchuck.match(oRegex)

/**

returns:

[ 'w', 'woo', 'wo', 'woo', 'woo', 'woooo' ]

*/
```

Now we can see that all ‘w’s are matched, and *if* they are followed by any number of ‘o’s, those substrings are also matched. We can see all of our matches bolded in the string: Ho**w** much **woo**d **wo**uld a **woo**dchuck chuck if a **woo**dchuck could chuck **woooo**d?

### Matching zero or one occurences with `?`  

What if we wanted to do the same thing as above, filter ‘w’ and optionally ‘o’, but instead of filtering for all trailing ‘o’s we only wanted to match one ‘o’. In that case we could use the question mark (`?`) symbol, like this: `wo?`. This expression will match all ‘w’s and up to one ‘o’. If there are no trailing 'o's it will only match the 'w'. Let’s look at an update to our previous examples:

```
const woodchuck = "How much wood would a woodchuck chuck if a woodchuck could chuck wooood?"

const oRegex = /wo?/g

woodchuck.match(oRegex)

/**
returns:

[ 'w', 'wo', 'wo', 'wo', 'wo', 'wo' ]

*/
```

Similar to our previous example, all ‘w’s are matched, but instead of matching all trailing ‘o’s, we match a maximum of one. This sentence shows us exactly what was matched in bold. Compare it to the previous example:

> Ho**w** much **wo**od **wo**uld a **wo**odchuck chuck if a **wo**odchuck could chuck **wo**oood?

### Matching with ranges

This is all great, and allows us to compose more robust filters, but having the option of zero, one, or infinite matches still feels a bit limiting. Luckily, regex syntax also gives us ranges. Using curly brackets `{}`, we can specify lower limits, upper limits, and ranges of how many characters to match.

For example, if we wanted to match all ‘w’s that are followed by at least two ‘o’s we could do so like this: `wo{2,}`. Or if we wanted to match between one and three trailing ‘o’s we could create a range like this: `wo{1, 3}.` We can specify an exact number of matches by providing one number and omitting the comma, like so: `wo{3}`.

Head to `regexQuantifiers.js` for some practice with these concepts.