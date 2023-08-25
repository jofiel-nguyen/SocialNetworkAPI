# Social Network API

This is an API for a social network web application built using MongoDB, Express.js, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and create a friend list.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
   ```shell
   git clone https://github.com/your-username/social-network-api.git
   ```

2. Install the dependencies using the command:
   ```shell
   npm install
   ```

3. Configure the MongoDB database connection in the `.env` file. You can use a local or remote MongoDB instance.

4. Start the server using the command:
   ```shell
   npm start
   ```

## Usage

Once the server is running, you can use a tool like Insomnia or Postman to interact with the API. The API routes available are as follows:

### Users

- **GET /api/users**: Get all users.
- **GET /api/users/:userId**: Get a single user by their _id and populate their thought and friend data.
- **POST /api/users**: Create a new user. Provide the following data in the request body:
  ```json
  {
    "username": "example",
    "email": "example@example.com"
  }
  ```
- **PUT /api/users/:userId**: Update a user by their _id. Provide the updated user data in the request body.
- **DELETE /api/users/:userId**: Delete a user by their _id.
- **POST /api/users/:userId/friends/:friendId**: Add a new friend to a user's friend list. Provide the userId and friendId in the URL parameters.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user's friend list. Provide the userId and friendId in the URL parameters.

### Thoughts

- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:thoughtId**: Get a single thought by its _id.
- **POST /api/thoughts**: Create a new thought. Provide the following data in the request body:
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "example",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
- **PUT /api/thoughts/:thoughtId**: Update a thought by its _id. Provide the updated thought data in the request body.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by its _id.
- **POST /api/thoughts/:thoughtId/reactions**: Create a reaction stored in a single thought's reactions array field. Provide the thoughtId in the URL parameter and the reaction data in the request body.
- **DELETE /api/thoughts/:thoughtId/reactions**: Remove a reaction by its reactionId from a single thought's reactions array field. Provide the thoughtId and reactionId in the URL parameters.


## Walkthrough Video

Watch a walkthrough video of this API in action: [Walkthrough Video](https://drive.google.com/file/d/1B1i5n8IBTla7XLtPjG79XANmvKmnE57P/view?usp=drive_link)

## Links

- GitHub Repository: [https://github.com/your-username/social-network-api](https://github.com/your-username/social-network-api)

## Credits

- Express.js: [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
- Mongoose: [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)

## License

This project is licensed under the MIT License.
