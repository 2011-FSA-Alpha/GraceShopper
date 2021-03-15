# Wallpaper

| Table of Contents                                                                                          |
| ---------------------------------------------------------------------------------------------------------- |
| Project Management                                                                                         |
| [Repo](https://github.com/2011-FSA-Alpha/GraceShopper)                                                     |
| [Team](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#team)                                           |
| Project Architecture                                                                                       |
| [Architecture](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Project-Architecture)                   |
| [DB Schema](https://dbdiagram.io/d/5ffdd60b80d742080a3606c2)                                               |
| [Wireframes](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)                     |
| Standards                                                                                                  |
| [Naming Conventions](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#naming-conventions)               |
| [Commit Convention](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#commit-messages)                   |
| [Testing Style](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#testing-style)                         |
| Workflows                                                                                                  |
| [Pre-Pull Request Workflow](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#pre-pull-request-workflow) |
| [Resolving Merge Conflicts](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Resolving-Merge-Conflicts) |
| Documentation                                                                                              |
| [NPM Packages](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Package-Documentation)                  |

## Team

* Ned Brennan — nedbrnnn@gmail.com
* Morgan Hu — morgan.hu738@gmail.com
* Azriel Goldman — azmaster3000@gmail.com
* Ricky Rhodes — rickyarhodes@gmail.com

## Deployed App

http://wallpapr.herokuapp.com/

## Getting Started

Running `npm run start-dev` will make great things happen!

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

## To-do Board

[View To-do Board](https://github.com/2011-FSA-Alpha/GraceShopper/projects/1)

## Repo

[Wallpapr Github Repo](https://github.com/2011-FSA-Alpha/GraceShopper)

## Database Schema

* Diagram: https://dbdiagram.io/d/5ffdd60b80d742080a3606c2

## Wireframes

[View on Figma](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)

## Standardization

### Naming Conventions:

* Components: PascalCase // eg. `AllProducts.js`
* Reducers: camelCase // eg. `myStore.js`
* Tests: type.spec.js // eg. `AllProducts.test.js`, `myStore.test.js`

### Commit Messages:

* Semantic style — http://karma-runner.github.io/4.0/dev/git-commit-msg.html
* eg. `feat(add User model to database)`
* what is being added(summary of what it does) - more details if needed.

### Testing Style:

* Framework: Mocha
* Assertions: Chai
* Front-end: Enzyme
* Back-end: Supertest

Please write tests with the `expect` style in Chai
https://www.chaijs.com/guide/styles/#expect

#### Run a single test file:

`npx mocha ./client/components/OrderConfirmed.spec.js --require @babel/polyfill --require @babel/register -w`

### Pre-Pull Request Workflow

* From current feature branch

1.  `git stash`
2.  `git pull origin master`
3.  `git stash apply`
4.  `git add <new feature>`
5.  `git commit -m <commit message>`
6.  `git push`

### OAuth

* To use OAuth with Google, complete the steps above with a real client
  ID and client secret supplied from Google
  * You can get them from the [Google APIs dashboard][google-apis].

[google-apis]: https://console.developers.google.com/apis/credentials
