# Use the official Node.js image as the base image
FROM node:latest

# Create a new directory for the app files and set it as the working directory
WORKDIR /src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies into the container
RUN npm install

# Copy the source code of the application into the container
COPY . .

# Expose the network port on which your Node.js app listens
EXPOSE 9000

# Specify the command to run within the container
CMD ["npm", "start"]