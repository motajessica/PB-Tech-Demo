To build docker images and run the containers use `docker-compose up`

The app responds on `http://localhost:9000` 

Initially the database will be empty. So if you try to access `http://localhost:9000/` you'll get an error message
`{ message: 'Item not found' }` as response. 

To add an item to the database just access  `http://localhost:9000/add` from the browser. You should get a response "Saved item". Then if you go back to `http://localhost:9000/` you should get the expected json `{message: "Hello world"}` 