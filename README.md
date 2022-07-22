# Social Network 
This is a API meant for a social netowrk we application. It is built with MongoDB database, Mongoose ODM, and Express.js as a NoSQL challenge.

## Description  
For a social media startup this is an API for a social network that uses a NoSQL database so that the website can handle large amounts of unstructured data. When the command is entered to invoke the application the server is started and the Mongoose models are synced to the MongoDB database. When the API GET routes for users and thoughts are opened in Insomnia the data for each of these routes is displayed in a formatted JSON. When the API POST, PUT, and DELETE routes are tested in Insomnia the user is able to successfully create, update, and delete users and thoughts in the database. When the API POST and DELETE routes are tested in Insomnia the user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list. 

## Some Screenshots 
#### Add a User
![Add a User](/public/imgs/addauser.png "Add a User")

#### Add a Friend
![Add a Friend](/public/imgs/addafriend.png "Add a Friend")

#### Add a Thought
![Add a Thought](/public/imgs/addathought.png "Add a Thought")

#### Get all Thoughts 
![Get all Thoughts ](/public/imgs/getallthoughts.png "Get all Thoughts ")


## CRUD Routes Created
* add a user
* get a single user
* get all users
* update a user
* delete a user
* add a thought
* get a single thought
* get all thoughts
* update a thought
* delete a thought
* add a reaction
* delete reaction
* add a friend 
* remove a friend

## Models

* User 
    * username
    * email
    * thoughts (array of values)
    * friends (array of values)

* Thought
    * thoughtText
    * createdAt
    * username (The user that created this thought)
    * reactions (array of replies)

