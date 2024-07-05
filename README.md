# Task manager backend

here is a simple backend using node.js following CRUD functionality with the use of mongodb & testing was done on postman .
## tech stack
1. node.js
2. mongodb atlas
3. mongoose
4. postman (for testing)

## database setup and connectivity
1. login to mongodb atlas and choose to create a free  cluster , name your cluster as you see fit.
2. connect your database by passing connection string in the mongo_uri variable in the .env file (you have to first create it).
3. test it using postman.

## note
1. make sure you are logged in to mongodb atlas .
2. in order to run this project you need to set up an .env file and set MONGO_URI variable equal to your connection string into your application code.

## Installation
We have to install all dependencies .

```bash
npm install // make sure to run this command
npm start 

##run these 2 commands to make sure you have everything to run the application.
npm install mongodb
npm i mongoose 
