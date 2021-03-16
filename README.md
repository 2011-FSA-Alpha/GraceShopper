# Wallpaper

| ---------------------------------------------------------------------------------------------------------- |
| Deployed Project                                                                                           |
| [Live App](http://wallpapr.herokuapp.com/)                                                                 |
| [Getting Started Locally](#getting-started-locally)                                                        |
| Project Management                                                                                         |
| [Team](#contributors)                                                                                      |
| [Architecture](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Project-Architecture)                   |
| [DB Schema](https://dbdiagram.io/d/5ffdd60b80d742080a3606c2)                                               |
| [Wireframes](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)                     |
| [Task Board](https://github.com/2011-FSA-Alpha/GraceShopper/projects/1)                                    |
| Standards                                                                                                  |
| [Naming Conventions](#naming-conventions)                                                                  |
| [Commit Convention](#commit-messages)                                                                      |
| [Testing Style](#testing-style)                                                                            |
| Workflows                                                                                                  |
| [Pre-Pull Request Workflow](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#pre-pull-request-workflow) |
| [Resolving Merge Conflicts](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Resolving-Merge-Conflicts) |
| Documentation                                                                                              |
| [NPM Packages](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Package-Documentation)                  |

# Contributors

|                                                     [Ned Brennan](https://www.linkedin.com/in/edward-brennan/)                                                     |                                                   [Morgan Hu](https://www.linkedin.com/in/morgan-hu-3990aa199/)                                                    |                                               [Azriel Goldman](https://www.linkedin.com/in/azriel-goldman-67193b77/)                                               |                                                    [Ricky Rhodes](https://www.linkedin.com/in/rickyrhodes/)                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://user-images.githubusercontent.com/36062933/111173237-dde2cf80-857c-11eb-8ca4-40962da23ad0.png" width = "150" />](https://github.com/NedBrennan) | [<img src="https://user-images.githubusercontent.com/36062933/111173257-e20eed00-857c-11eb-9c5c-69e3f7034bc8.jpeg" width = "150" />](https://github.com/morgan738) | [<img src="https://user-images.githubusercontent.com/36062933/111173276-e6d3a100-857c-11eb-990a-a9c4db9128c1.jpeg" width = "150" />](https://github.com/azrielg20) | [<img src="https://user-images.githubusercontent.com/36062933/108449617-c2acca80-7231-11eb-83bc-f9ddc4114c92.jpeg" width = "150" />](https://github.com/h0plyn) |
|   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/NedBrennan)   |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/morgan738)    |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/azrielg20)    |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/h0plyn)    |
|                  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/edward-brennan/)                   |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/morgan-hu-3990aa199/)                |              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/azriel-goldman-67193b77/)              |                  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/rickyrhodes/)                   |

# Deployed App

http://wallpapr.herokuapp.com/

# Getting Started Locally

1.  `git clone` && `cd` into the project directory
1.  `npm install` to install project dependencies
1.  `createdb wallpaper` && `createdb wallpaper-test` to make a Postgres database
1.  `npm run seed` to seed the database with data
1.  Running `npm run start-dev` will make great things happen!
1.  Open up `localhost:8080` in your favorite browser

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

# To-do Board

[View To-do Board](https://github.com/2011-FSA-Alpha/GraceShopper/projects/1)

# Database Schema

* Diagram: https://dbdiagram.io/d/5ffdd60b80d742080a3606c2

# Wireframes

[View on Figma](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)

# Standardization

## Naming Conventions:

* Components: PascalCase // eg. `AllProducts.js`
* Reducers: camelCase // eg. `myStore.js`
* Tests: type.spec.js // eg. `AllProducts.test.js`, `myStore.test.js`

## Commit Messages:

* Semantic style — http://karma-runner.github.io/4.0/dev/git-commit-msg.html
* eg. `feat(add User model to database)`
* what is being added(summary of what it does) - more details if needed.

## Testing Style:

* Framework: Mocha
* Assertions: Chai
* Front-end: Enzyme
* Back-end: Supertest

Please write tests with the `expect` style in Chai
https://www.chaijs.com/guide/styles/#expect

## Run a single test file:

`npx mocha ./client/components/OrderConfirmed.spec.js --require @babel/polyfill --require @babel/register -w`

## Pre-Pull Request Workflow

* From current feature branch

1.  `git stash`
2.  `git pull origin master`
3.  `git stash apply`
4.  `git add <new feature>`
5.  `git commit -m <commit message>`
6.  `git push`

# Acknowledgements

[google-apis]: https://console.developers.google.com/apis/credentials
* Thank you to [Fullstack Academy](https://www.fullstackacademy.com/) for bringing this team together to build _Wallpaper_
* Huge thanks to the team for hustling to build this project
* All photos courtesy [Ricky Rhodes](https://www.rickyrhodes.com)
