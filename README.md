# GoalBuddy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features

currently GoalBuddy's layout is being built, and functionality is limited. This current iteration shows a stripped down version of what I hope a user's home page will look like.

## Coming Features

The idea behind Goalbuddy is to create a social network for people to connect with other's that share similar goals. The primary feature is shared goal setting, and the ability for user's to establish a relationship of accountability.

Currently Goalbuddy's code only represents a mock up of a user's homepage. The primary feature of the homepage will be a feed that allows users to share, and view other's, posts about their progress towards their goals. In the future, the homepage will also allow users to search for potential connections with other users. These "pending connections" will originate from a separate page where users will create a "request" for an accountability partner.

## Functionality progress

(In order of priority)

1.) leverage Angular's ability to pass data so that a user can create a post within the "profile-feed" component and have it passed down to the "public-feed" component.

2.) Connect Goalbuddy to a database so that user's posts can be saved, and real accounts can be made.

3.) Create a functioning "register" and "login" section

3.) Implement a real shared feed where a user can see other user's actual posts.

4.) Allow users to post real "requests", and also allow users to see other's "pending" requests.

5.) Allow uses to respond to requests and establish a relationship.

6.) Create messaging protocol that users can use to communicate about goals, and establish parameters of accountability.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License


_Copyright (c) 2019 Jack Collins, Epicodus_
