 Build a RESTful API using Node.js and Express

This project involves building a RESTful API using Node.js and Express.js to manage a list of users. The API provides endpoints for standard CRUD (Create, Read, Update, Delete) operations.

1.The GET routes allow fetching all users or a specific user by ID
 
2.The POST route enables the addition of a new user.

3.The PUT route facilitates updating existing user details by ID.

4.The DELETE route removes a user by ID.

The project includes middleware for logging requests and validating incoming data in the POST and PUT requests. Data validation ensures all required fields like id, firstName, lastName, and hobby are present.

Error handling has been implemented to return appropriate HTTP status codes and meaningful error messages for scenarios like missing users or invalid input.

The user data is stored in-memory using an array for simplicity. The project is thoroughly tested using Thunder Client, with all test results documented for review.

This RESTful API demonstrates key concepts of routing, middleware, status codes, and error handling in a clean, well-documented manner, making it a reliable backend for user management systems.
