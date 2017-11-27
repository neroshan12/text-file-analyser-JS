# text-file-analyser-JS
The purpose of this project is to to build an application that can take a text file and output the individual words and the frequency at which they appear in the file. Building on this, the program should also output whether the number of times a word appears is a prime number or not.

## User Stories
```
As a user,
So I can determine the text file to analyse,
I'd like to be able to input a text file into the application.
```

```
As a user,
So I can see which words appear in the text file,
I'd like to be able to see a table of words that appear in the text file.
```

```
As a user,
So I can see the number of times words appear in the text file,
I'd like to be able to see a table of the number of times words appear in the text file.
```

```
As a user,
So I can see if the number of times a word appears in the text file is a prime number,
I'd like to be able to see a table displaying whether or not the number is a prime number.
```

## How I will approach the task
- Create user stories to follow Agile Methodology
- Create a Domain Object Model so I can visualise how the program will look
- I will create separate functions to deal with different aspects of the application:
  * Extracting text from text file
  * Separating text into individual words
  * Count the number of times words appears
  * Determine if the number of times the numbers appear is prime or not
  * Display text, frequency and prime? visually
- All functions will be created using TDD thus tests will be written in Jasmine first

## Potential Difficulties
As i have not written JavaScript in 6 weeks, I will have to pick up the language again and figure out how to import a text file as I have no experience in that. Separating text into individual words should be straight forward however I feel issues may arise when punctuation such as apostrophes are involved. There should be a straightforward method to counting the individual words and I should be able to figure out a mathematical way to determine whether a number is prime or not.

## Running the application (locally)
- cd text-file-analyser-JS (Navigate to the root directory of the project folder)
- open index.html (Run in the command-line)

## Technology stack
- JavaScript
- Testing: Jasmine

## Running the tests
- cd text-file-analyser-JS (Navigate to the root directory of the project folder)
- open SpecRunner.html (Run in the command-line)

## Future features

## Difficulties

## Feedback

## Authors

* [Nero Siva](https://github.com/neroshan12)
