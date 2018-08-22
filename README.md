# Steam Roulette
My submission for NZ MSA 2018 Phase 1

## What is it?
Steam Roulette does what it says on the tin - it will pick a random game from your library for you to play when you just can't decide!


## How does it work?
Using the steam api, and your user ID, the app scans the games associated with your account, and picks a random game for you to play.

## Technologies used
* React (Typescript)
* Material UI (React Components for Material Design)
* Steam Official API (Data)
* Docker (Containerize the app)
* Azure Web App for Containers (Deploy the app)
* Git, Github (Source control)

## Future changes
There is certainly room for expansion with this app with making the 'randomness' smarter. i.e. ability to ignore certain games, or games over a certain number of hours, or pick a random game from a certain steam tag.

## NPM commands

Freshly cloned? Use npm install to install the dependencies!

### npm start
Starts the development server. -- run from the app directory!
This will start the app on localhost:3000

### npm run build
Builds app into static files for production/deployment

### npm test
Starts test runner for unit tests

### npm run eject
Removes the tool, copies build dependances, config files and scripts into app directory. This can not be reversed!

