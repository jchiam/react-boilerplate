# React Boilerplate

This is a React frontend boilerplate with most of the necessary dependencies and configuration setup to build a frontend web applicaiton in React redux. This setup assumes a Firebase backend (`yarn` commands included).

## Project Setup

### React
1. Install node: `brew install node`
1. Install yarn: `brew install yarn`
1. Ensure all dependencies are installed with `yarn`

### Linting
1. ESLint has been hooked to git's pre-push
1. Run manually: `yarn lint`

### Environment Variables
1. Make a copy of `.env.example` and name it `.env`
1. Fill in the necessary variables in `.env`

## Run
- Run the app with `yarn start`
- View the app at [`localhost:8080`](http://localhost:8080)

## Local Staging
- Serve local staging with `yarn stage`
- View the staging app at [`localhost:5000`](http://localhost:5000)

## Deploy
1. Login to Firebase with `firebase login`
1. Deploy the app with `firebase deploy`
