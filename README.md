# react-js-buy-hooks

An updated example of [js-buy-sdk](https://github.com/Shopify/js-buy-sdk) built with [React](https://facebook.github.io/react/). This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with NPM)
- [Yarn](https://yarnpkg.com/en/)

## Installation

- `git clone git@github.com:DanBillson/react-js-buy-hooks.git` this repository
- `cd react-js-buy-hooks`
- `yarn install`

## Configuring

If you would like to connect your store to this example, open up `src/index.js` and update the `domain` and `storefrontAccessToken`:

```js
<StoreProvider
  storefrontAccessToken="dd4d4dc146542ba7763305d71d1b3d38"
  domain="graphql.myshopify.com"
>
```

## Running

Start a local server:

```
yarn start
```

- Visit your app at [http://localhost:3000](http://localhost:3000).

## Further Reading / Useful Links

- [React](https://facebook.github.io/react/)
- [JS Buy SDK](https://github.com/Shopify/js-buy-sdk)

## Contributing

For help on setting up the repo locally, building, testing, and contributing
please see [CONTRIBUTING.md](https://github.com/Shopify/storefront-api-examples/blob/master/CONTRIBUTING.md).

## Code of Conduct

All developers who wish to contribute through code or issues, take a look at the
[CODE_OF_CONDUCT.md](https://github.com/Shopify/storefront-api-examples/blob/master/CODE_OF_CONDUCT.md).

## License

MIT, see [LICENSE](https://github.com/Shopify/storefront-api-examples/blob/master/LICENSE.txt) for details.
