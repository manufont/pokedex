# Manu's pokedex

A basic React pokedex using data from [pokeapi](https://pokeapi.co/).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Installation

Clone the repo, then
```
npm install
```

If you want to get a live list of tweets related to each pokemon, you'll need to configure & launch the tweets socket server

### Tweets socket server configuration
Add your twitter api credentials to the `.env` file.

## Launch

```
npm run server
```
The tweets socket server will run on port 4000.

Run the app in development mode:
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

or

Build the app for production (output to the `build` folder):
```
npm run build
```

## Testing
```
npm test a
```


## Custom pokeapi server
You can change the pokeapi server address by changing the environment variable `REACT_APP_POKEAPI_URL` in the `.env` file.

## License

MIT
