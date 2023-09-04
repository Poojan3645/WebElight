# WebElight
# An app to manage FMCG commercial 

## Feature
- Create a User
- Update a User by ID
- Delete a User by ID
- Get all User
- Able to sort by crated/updated date (Default updated DESC)

## Installation
Tutorials Node Js requires [Node.js](https://nodejs.org/) v16+ to run.

sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
$ nvm install 16.13.1
$ nvm use 8.1.2.


## Clone this repository (and cd to it.)
sh
$ git clone https://github.com/Poojan3645/WebElight.git
$ cd nodeJsDem0-tutorial


## Install the dependencies and dev Dependencies and start the server.

sh
npm install

## Load env vars

sh
MONGO_URL="mongodb://localhost:27017/Tutorials"
PORT = 8080


Input the desired environmental variables in .env

### Start the server
sh
nodemon index.js
