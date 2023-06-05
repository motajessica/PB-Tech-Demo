# Get Started
The easiest way to get the application up and running is by using docker compose. Simply run `docker-compose up` from the root of the project and it'll build all the images and get the containers up and running.

## Development setup
You don't want to rebuild the images everytime you make changes in the code though. So the best way to do a development setup is by stopping the backend and the frontend containers and running the Node server and the React app locally in your machine. You can still use the mongo image to avoid having to setup it yourself in your machine. 

To do that do as follow: 

You can build a mongo image by running `docker-compose up`  from the command line. If you choose this option make sure to find the backend, frontend and the mongo containers and stop them as the `docker-compose up` command will build the images and start the containers. You can do that on Docker Desktop or via command line. 

### Start the database server
If you want to use as database the `mongo` container that was created with `docker-compose up` just make sure you start it in the right port so your machine can find it. 

Run `docker run -p 27017:27017 mongo`. It should get your mongo db container up and running in the port that the backend app will find.

### Start the backend

Next you need to get the backend NodeJS app (backend) and the React app (frontend) running. 
You can start from the backend. 

Go to the backend folder

`cd backend` 

Install dependencies 

`npm install` 

Run your app in dev mode to make sure the app finds the database 

`npm start` 


If it works you should get the this:

``` 
[nodemon] starting `node src/server.js`
Running application in development environment
server started on port 9000
MongoDB Connected
``` 

### Start the React server
The last thing is to get the React application up and running. If you're in the `backend/`  folder you can get to the `frontend/` folder by running `cd ../frontend` from the command line. 

Install the dependencies:

`npm install` 

Start the server

`npm start` 

You should see something like this

``` 
Compiled successfully!

You can now view pb-tech-demo in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.20.15:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
``` 

Now the react app is available at  http://localhost:3000 and the backend on  http://localhost:9000

