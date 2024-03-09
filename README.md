Open your terminal or command prompt.

Use the git clone command to clone the repository. Replace the URL with the actual repository URL:

bash

git clone https://github.com/SachinNic1502/MoviesApp

Navigate to the cloned project folder:

bash

    cd MoviesApp

Install Dependencies

    Ensure you have Node.js and npm installed on your machine.

    Install project dependencies:

    bash

    npm install

Run the Express API with Nodemon

    Start the Express API using nodemon:

    bash

npm run dev or npm start

The npm run dev command uses nodemon, which automatically restarts the server when changes are made to the code.

The API will run on http://localhost:3000. You can test the greeting endpoint by visiting http://localhost:3000/api/greeting in your browser or using tools like Postman.
