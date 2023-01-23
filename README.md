# QuizMe

Link: 

https://ts-quizme.herokuapp.com/

QuizMe is a MERN app designed to help students make flashcard stacks and individual flashcards within those stacks in order to help them study. 

Technologies used:

* Mongoose
* Express
* React
* Node.js
* JWT Simple
* Framer Motion
* CSS


Approach taken:

For this project I wanted to put an emphasis on clean, well structured code. I thought about where functionality needs to happen and when and kept that functionality specified to a certain page instead of all throughout the app. My approach was to only have certain functionality only when it was necessary and have a clean and easy to use user experience.

Major hurdles:

Because the app revolves around the current user and only displays their information, I used a token (created by JWT simple) in local storage to hold their user ID. I used this user ID to authenticate and find their information in the database. I ran into an issue where the local storage token was not updating until after hitting some routes. I initially declared the config (which sends the token as an authorization header) outside of my api functions but had to instead declared it inside each function in order to ensure it grabs the token each time the route is ran and would always be up to date. 

User stories: 

* As a student I want to use QuizMe to digitize my flash cards and help me study.
* As a student I want to be able to create new study cards and edit them.
* As a student I want to be able to delete a single card or all cards at once.
* As a former student I want to be able to delete my account and all of my cards.

Installation instructions:

If you wish to view the code, you can fork this repo and clone to your local machine. After that you can open the code in your editor and run npm i to install the packages necessary to run this app. 

Wireframes: 

[QuizMe.pdf](https://github.com/tschmiedl/QuizMe/files/10481959/QuizMe.pdf)

Views of the app: 

[Quiz-Me-Final.pdf](https://github.com/tschmiedl/QuizMe/files/10481966/Quiz-Me-Final.pdf)



