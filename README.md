# text-file-analyser-JS

The purpose of this project is to build an application that can take a text file
and output the individual words and the frequency at which they appear in the
file. Building on this, the program should also output whether the number of
times a word appears is a prime number or not.

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

* Create user stories to follow Agile Methodology
* Create a Domain Object Model so I can visualise how the program will look
* I will create separate functions to deal with different aspects of the
  application:
  - Extracting text from text file
  - Separating text into individual words
  - Count the number of times words appears
  - Determine if the number of times the numbers appear is prime or not
  - Display text, frequency and prime? visually
* All functions will be created using TDD thus tests will be written in Jasmine
  first

## Potential Difficulties

As I have not written JavaScript in 6 weeks, I will have to pick up the language
again and figure out how to import a text file as I have no experience in that.
Separating text into individual words should be straight forward however I feel
issues may arise when punctuation such as apostrophes are involved. There should
be a straightforward method to counting the individual words and I should be
able to figure out a mathematical way to determine whether a number is prime or
not.

## Running the application

* Download Node.js
* git clone https://github.com/neroshan12/text-file-analyser-JS.git
* cd text-file-analyser-JS
* npm install
* For tests run 'jasmine'

## Technology stack

* JavaScript
* Testing: Jasmine

## Future features

* Separating text into individual words
* Count the number of times words appears
* Determine if the number of times the numbers appear is prime or not
* Display text, frequency and prime? visually

## Difficulties and reason for incomplete project

Though I thoroughly enjoy JavaScript, it seems I have run out of time to
complete the project within the allotted timeframe. Going back over the
JavaScript content from Maker's Academy has enabled me to improve my programming
skills and inspired me to sign up to extra online courses. However, the time
spent on refreshing my knowledge, has restricted my ability to fully complete
this project, as I spent the majority of my time figuring out how to import a
text file into JavaScript and running into a variety of technical issues.

## Reflecting on the task

Looking back at the task, it was an interesting problem to solve and I feel I
have investigated various facets of it, though only a text 'reader/importer' is
committed. It has helped me clarify certain gaps in my knowledge that I aim to
fill and has aided my understanding of how to approach problems in different
ways. I also feel that given slightly more time I could write the necessary code
to separate the text into words, count the number of words and determine if
those numbers were prime or not. Ultimately, I feel as if I followed good
processes (such as Domain Object Modelling and TDD), reinforced my passion for
code and has proven to be a useful exercise for me to learn from.

## Authors

* [Nero Siva](https://github.com/neroshan12)
