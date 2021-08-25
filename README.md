# Dilemma, Would You Rather Game

## Table of Contents

- [Summary](#Summary)

- [Technologies](#Technologies)

- [Features](#Features)

- [Testing](#Testing)

- [Structure](#Structure)

- [Usage and Installation](#usage-and-installation)

## Summary

Dilemma is a would you rather game made with React/Redux

It uses mock data to simulate a user/game server allowing users to be authenticated and keeping track of their answers, questions and score.

It demonstrates my understanding of React and its components,components life cycle, and states. As well as my understanding of Redux and its action creators, actions, reducers, helpers and context providers as well as React Router and its routers, nested navigations, redirection, history and parameterized navigation.

## Technologies

React was used for the UI.
Redux was used for State Management.
React Router was used for navigational components

## Features

1. View and vote on existing questions.

2. Login/Authenticate as an existing user.

3. View all answered/unanswered questions.

4. View previously answered questions and see your answers.

5. Error handling in case you navigate to a non-existing question.

6. Create a would you rather question for you and other users to vote on.

7. See the leaderboard and see how your score compares with other players.

## Testing

User credentials for testing can be found inside src/utils/\_DATA.js

## Structure

```
+---public
|   |   favicon.ico
|   |   index.html
|   |   manifest.json
|   |   robots.txt
|   |
\---src
    |   index.css
    |   index.js
    |
    +---actions
    |       authedUser.js
    |       questions.js
    |       shared.js
    |       users.js
    |
    +---components
    |       App.js
    |
    +---images
    |   +---avatars
    |   |       0.png
    |   |       1.png
    |   |       2.png
    |   |       3.png
    |   |       4.png
    |   |       5.png
    |   |       6.png
    |   |
    |   \---trophies
    |           bronze-trophy.png
    |           gold-trophy.png
    |           silver-trophy.png
    |
    +---middleware
    |       index.js
    |       logger.js
    |
    +---reducers
    |       authedUser.js
    |       index.js
    |       questions.js
    |       users.js
    |
    \---utils
            api.js
            _DATA.js

```

## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages

```
npm install
```

2. A. You can either run in development mode using

```
npm start
```

The `_DATA.js` file represents a fake database and methods that let you access the data.

## Data

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

The code talks to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`
