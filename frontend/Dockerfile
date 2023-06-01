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

# Build the frontend app
RUN npm run build

# Expose the network port on which your frontend app listens
EXPOSE 80

# Specify the command to run within the container
CMD ["npm", "start"]
