# User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptancce Criteria 
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Crud Routes
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

BONUS: Remove a user's associated thoughts when deleted.

## Models

### User

* username
    * string
    * unique
    * required
    * trimmed

* email
    * string
    * required
    * unique
    * Must match a valid email address (look into Mongoose's matching validation)

* thoughts
    * Array of _id values referencing the Thought model

* friends
    * Array of _id values referencing the User model (self-reference)

#### Schema Settings 
Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

### Thought

* thoughtText
    * string
    * required
    * must be between 1 and 280 characters

* createdAt
    * date
    * Set default value to the current timestamp
    * Use a getter method to format the timestamp on query

* username (The user that created this thought)
    * String
    * Required

* reactions (These are like replies)
    * Array of nested documents created with the reactionSchema

#### Schema Settings 
Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

### Reaction (schema only)

* reactionId
    * Use Mongoose's ObjectId data type
    * Default value is set to a new ObjectId

* reactionBody
    * String
    * Required
    * 280 character maximum

* username
    * String
    * Required

* createdAt
    * Date
    * Set default value to the current timestamp
    * Use a getter method to format the timestamp on query

#### Schema Settings 
This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.