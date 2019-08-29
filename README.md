# The Googlon language

Archaeologists found a scroll containing texts in the ancient and mysterious Googlon language.

After many years of study, linguists have learned some of the fundamental characteristics of this language:

## Letter Classification

Googlon letters are classified in two groups: the letters **u, d, x, s, m, p, f** are called **"foo letters"** while the other letters are called **"bar letters"**.

## Prepositions

The linguists have discovered that in the Googlon language, the prepositions are the words of exactly 6 letters which end in a foo letter and do not contain the letter **u**.

## Verbs

Another interesting fact discovered by linguists is that, in the Googlon language, verbs are words of 6 letters or more that end in a bar letter. Furthermore, if a verb starts in a bar letter, then the verb is inflected in its subjunctive form.


## Lexicographical Order

In Googlon, like in our system, words are always ordered lexicographically, but the challenge is that the order of the letters in the Googlon alphabet is different from ours. Their alphabet, in order, is: **sxocqnmwpfyheljrdgui**.

##Numbers

Not that words aren't fun, but one could ask: how do Googlons represent the numbers? Well, in Googlon, words also represent numbers given in base 20, where each letter is a digit. The digits are ordered from the least significant to the most significant, which is the opposite of our system. That is, the leftmost digit is the unit, the second digit is worth 20, the third one is worth 400, and so on and so forth. The values of the letters are given by the order they appear in the Googlon alphabet (which, as we saw, is ordered differently from our alphabet).
That is, the first letter of the Googlon alphabet represents the digit 0, the second letter represents the digit 1,
and the last one represents the digit 19.

As an example, the Googlon word **gxjrc** represents the number **605637**.
Googlons consider a number to be pretty if it satisfies all of the following properties:

- it is greater than or equal to 81827
- it is divisible by 3

## The Challenge

Write a program (in any language) that answers the following questions to a given Googlon text:

1. How many prepositions are there in the text?
2. How many verbs are there in the text?
3. How many of those verbs in the text are in the subjunctive form?
4. Generate a vocabulary list with distinct words ordered Googlon's alphabetical order.
5. How many distinct pretty numbers are in the text?
   Use the test cases to validate your algorithm.

---

# Solution

The input for this challenge is a text or a chain of words separated by spaces.
What the challenge is asking for:

1. How many prepositions are there in the text?
2. How many verbs are there in the text?
3. How many of those verbs in the text are in the subjunctive form?
4. Generate a vocabulary list with distinct words ordered Googlon's alphabetical order.
5. How many distinct pretty numbers are in the text?

So, a first analysis of what is going on with this challenge let us know that we will have to iterate word by word in text to figure out if that word is a preposition, a verb, a subjunctive verb...

Another approach could be divide the code to accomplish every item in the list separately but it means complexity of the solution will increase so let's keep one iteration instead.

Then, for every word, let's see what are we going to do to solve every question.

### 1. Prepositions

To solve this question, I thought that regular expressions will be worth so I implemented a function called **_isPreposition_** that uses a regular expression to ensure if the word is a preposition or not.

### 2. Verbs (regular ones)

Same solution as above, we have regular expressions that make our code easier. I implemented a function called **_isVerb_**

### 3. Subjunctive Verbs

Same solution as above with regular expressions. I implemented a function called **_isSubjunctiveVerb_**.

> _As subjunctive verbs are also verbs, I check if a word is a subjunctive verb before a regular one_

### 4. Vocabulary list

Okay, so here we need to save our word into a sorted list, vanilla javascript has not a SortedArray implemented so then, the way to do this starts saving every word in an Array and then sort it with the _sort_ array function. Pretty easy.

The problem is that the _sort_ function in javascript takes ascii as alphabet order and Googlon language has a different one. So we have two options here...

1. Create a new _sort_ function that works with the Googlon language.
2. Map every character in the Googlon language to ascii.

The first one is tedious and we are quitting from using standard functions in javascript language that they can be improved eventually in a low level (compiler improvements).

The second one instead is quite simple and allow us to use standard functions so let keep it this way.

The idea is then... to convert every word from Googlon language to ascii, mapping every character by position in the alphabet.
Once we get an Array with all the words in ascii we will use the _sort_ function from javascript to sort the list, then we will convert in the other way around so we keep the list sorted and in the Googlon language again.

To make this, I implemented two functions **toGooglon** and **toAscii** in order to move from one alphabet to another.

> _With some benchmark, I realized that saving the words in a Set instead of in a regular Array is a bit faster because the process of checking if the word is already in the Array takes more time than in a Set instance. Even if after all we have to generate an Array from the Set.
> Also I was trying with different implementations of the functions **toGooglon** and **toAscii**, I keep the one with the for loops, is quite faster than the others_

### 5. Pretty numbers

Ok, this problem looks a bit complicated but not at all, we need to set which is the numeric value for every character in Googlon language, it is given based on position in the alphabet. "s" is 0 and "i" is 19. If we have the characters in an Array or a String, it will be great because we can use the index of every character to know the numeric value.

Another thing to take in account is the base 20, depends on position and the numeric value, we will calculate the number. I implemented a function called **toNumber** in order to convert a Googlon word into its number representation.

After getting that, we just need to check if is a pretty number as well, with a few conditions given by the problem.

> Using a Map instance could make this code even faster but the limiting lenght of alphabets make this improvement not valuable enough.

---

## How to use it

### Requirements

You need to install node.

### Run

This file is the entry point to run the developed solution for the googlon challenge. In order to use it, you should type in the console:

    node main.js [input_file_path]

where <input_file_path> is the path to your input file.

It is taking the solution or the results from the googlon function and then
printed as expected for the output file. By default it is done in the console
but if you want to get all of it in a file, you just need to type this after:

    node main.js [input_file_path] > [output_file_path]

Then a new file <output_file_path> will be appear in the current directory with the results.

For example:

    node main.js tests/a > output.txt
