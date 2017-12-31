# SelfKey Crowdsale Test UI

The Test UI for the SelfKey Crowdsale

Deployed to http://selfkey-crowdsale-tester.netlify.com

* `develop` [![Build Status](https://www.travis-ci.org/SelfKeyFoundation/crowdsale-tester.svg?branch=develop)](https://www.travis-ci.org/SelfKeyFoundation/crowdsale-tester)[![Greenkeeper badge](https://badges.greenkeeper.io/SelfKeyFoundation/crowdsale-tester.svg?branch=develop)](https://greenkeeper.io/)

* `master` [![Build Status](https://www.travis-ci.org/SelfKeyFoundation/crowdsale-tester.svg?branch=master)](https://www.travis-ci.org/SelfKeyFoundation/crowdsale-tester)[![Greenkeeper badge](https://badges.greenkeeper.io/SelfKeyFoundation/crowdsale-tester.svg?branch=master)](https://greenkeeper.io/)

## Development

The website is a standard React/Redux single page app built with [`create-react-app`](https://github.com/facebookincubator/create-react-app)


It uses the following:

* Styling and basic UI components from React Bootstrap (version 3)
* Routing using React Router (version 4)
* Code is linted using `eslint` and prettified using `prettier`
* Tests are run using `jest`

### Prerequisites

* [NodeJS](https://nodejs.org) — `brew install nvm` then `nvm use 9.3.0` (or later)
* [`create-react-app`](https://github.com/facebookincubator/create-react-app) — `npm install -g create-react-app`

### Environment Variables

* Create a local `.env.local` file (do not commit this, keep it local), or
* set up actual environment variables.

The variables needed are:

* `REACT_APP_ETH_PROVIDER_URL` — The url of the eth `HttpProvider`.
* `REACT_APP_CROWDSALE_ADDRESS` — The address of the `SelfKey Crowdsale` contract
* `REACT_APP_TOKEN_ADDRESS` — The address of the `KEY` token
* `REACT_APP_PRIVATE_KEY` — The private key of the contracts' owner (Note this is not really very secure to expose this within the app so we'll do this differently if we use this code for something real)

### Start it

Run

    npm install

Then run

    npm start

This will start the development web server on port `3000` and launch your browser.  Use Chrome or Firefox with the MetaMask extension enabled and logged in.

*You will need the full owner passphrase to use this tool.*

### Test it

* `npm test` — runs the unit tests (quick)
* `npm test:coverage` — runs instrumented unit tests and performs code coverage analysis.
* `npm test:debug` — to debug your unit tests interactively.

### Lint it

    npm run lint

or

    npm run lint -- --fix

_note the double `-- --`_

### Analyse it

    npm run build
    npm run analyse

*Note*: American developers, you can also use `npm run analyze`

## Contributing

Contributions are welcomed. Please see the attached [CONTRIBUTING notes](CONTRIBUTING.md).
