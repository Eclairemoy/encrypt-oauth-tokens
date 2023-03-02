## Encrypt OAuth Tokens

This is an example of how you can encrypt access tokens and other credentials using Evervault Outbound Relay.

In this demo you will encrypt Github OAuth access tokens.

This was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can make adjustments to the callback handler at `pages/api/callback.js`. The page auto-updates as you edit the file.

## Prerequisites

This project requires
* An Evervault Account [create one here](https://app.evervault.com/register)
* A Githhub OAuth App [create one here](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

## Environment variables

See the `env.example` file for the required environment variables to run the code. You can rename it to `.env` and add yours to run locally.

## Outbound Relay

You will need to configure `*.github.com` as a destination in the Outbound Relay section of your Evervault App and add `access_token` as a field to encrypt under response encryption.

## Learn More

To learn more about Evervault check out:

- [Evervault Outbound Relay Documentation](https://docs.evervault.com/products/outbound-relay) - share encrypted data with third-party APIs.
- [Evervault Node.js SDK](https://docs.evervault.com/sdks/nodejs)
