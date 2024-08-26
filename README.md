"# React-Application" 
1. Create Environment Files
In your React project, create the following environment files in the root directory:

.env.development
.env.production
.env.staging
.env.uat
2. Define Environment Variables
Add environment-specific variables to each file. For example:

.env.development:

REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_ENV_NAME=development

.env.production:

REACT_APP_API_URL=http://localhost:4100/api/users
REACT_APP_ENV_NAME=development


.env.uat:

REACT_APP_API_URL=http://localhost:4200/api/users
REACT_APP_ENV_NAME=development


3. Modify the package.json Scripts
Update the scripts section in your package.json to include commands for building the React app for each environment:

"scripts": {
    "start": "react-scripts start",
    "build:dev": "env-cmd -f .env.development react-scripts build",
    "build:prod": "env-cmd -f .env.production react-scripts build",
    "build:uat": "env-cmd -f .env.uat react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
4. Install env-cmd
To easily manage multiple environment files, install env-cmd:

npm install env-cmd --save-dev

5. Building for Each Environment
Now you can build your React application for each environment:

DEV: npm run build:dev
PROD: npm run build:prod
STAGE: npm run build:stage
UAT: npm run build:uat
Each build will use the environment variables defined in the corresponding .env file.

6. Accessing Environment Variables in Code
In your React code, you can access these environment variables using process.env:

const apiUrl = process.env.REACT_APP_API_URL;
const envName = process.env.REACT_APP_ENV_NAME;

console.log(`API URL: ${apiUrl}`);
console.log(`Environment: ${envName}`);
7. Deploying to Different Environments
When deploying, ensure you use the appropriate build command for the target environment. For example, to deploy to UAT:

npm run build:uat
Then, deploy the generated build folder to your server or hosting service.

Summary
With this setup, you can manage and build your React application for UAT, DEV, PROD, and STAGE environments, ensuring that each environment uses the correct configuration.

--------------------------------------------------------

"# Node-Application" 

To run your Node.js application with different environment configurations, you can follow these steps:

1. Create Environment Files
In your Node.js project, create environment files for each environment:

.env.development
.env.production
.env.uat
2. Define Environment Variables
Add environment-specific variables to each file. For example:


.env.development:

PORT=4500
DATABASE_URL=mongodb://prod-db-url
API_KEY=your-production-api-key


.env.production:

PORT=5000
DATABASE_URL=mongodb://prod-db-url
API_KEY=your-production-api-key

.env.uat:

PORT=5500
DATABASE_URL=mongodb://prod-db-url
API_KEY=your-production-api-key

3. Install dotenv Package
To load environment variables from the .env files, install the dotenv package:

npm install dotenv

4. Load Environment Variables in Your Node.js Application
At the top of your index.js or app.js file, load the environment variables:


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



5. Running the Application with Different Environments on Windows
On Windows, the syntax for setting an environment variable before a command is different:

Development Environment:

set NODE_ENV=development && node index.js
Production Environment:

set NODE_ENV=production && node index.js
Staging Environment:

set NODE_ENV=uat && node index.js

6. Automate with npm Scripts in package.json
To simplify running your application in different environments, update your package.json scripts like this:


"scripts": {
  "start:dev": "set NODE_ENV=development && node index.js",
  "start:prod": "set NODE_ENV=production && node index.js",
  "start:uat": "set NODE_ENV=uat && node index.js"
}
Now you can run your application using:

Development: npm run start:dev
Production: npm run start:prod
UAT: npm run start:uat
Summary
On Windows, you can still manage multiple environments by setting the NODE_ENV variable using the set command before running your Node.js application. The process is similar to Unix-based systems, with only a slight syntax change for setting environment variables.

