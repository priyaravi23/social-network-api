## Social Network API

### Description

*An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Technologies - Express.js for routing, a MongoDB database, Mongoose ODM, and Moment.js package to format time*

### Application Demo

This application demonstrates the database for a social networking application. API routes are tested through Postman. Following demo's show various functionalities of the application.


![](public/assets/images/users-thoughts-routes.gif)

This walkthrough video shows:

- GET route to return all users and all thoughts
- GET route to return a single user and a single thought


![](public/assets/images/users-routes.gif)

This walkthrough video shows:

- POST route for creating a user in the database
- PUT route for updating a user in the database
- DELETE route to delete users from the database


![](public/assets/images/thoughts-routes.gif)

This walkthrough video shows:

- POST route for creating a thought in the database
- PUT route for updating a thought in the database
- DELETE route to delete a thought from the database


![](public/assets/images/reactions-routes.gif)

This walkthrough video shows:

- POST route to create a reaction
- DELETE route to delete a reaction


![](public/assets/images/friends-routes.gif)

This walkthrough video shows:

- POST route for adding a friend to a user's friend list
- DELETE route for deleting a friend from a user's friend list


### User Story

```text
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```text
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Postman for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Postman
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```