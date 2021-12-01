# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Guide for this jokes project](https://remix.run/docs/en/v1/tutorials/jokes)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

### Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root, and add the following lines:

```
DATABASE_URL="file:./dev.db"
SESSION_SECRET="whatever you want goes here"
```

Create a database file in `prisma/dev.db` and push all the necessary changes to the database to match the schema.

```bash
npx prisma db push
```

If the database gets messed up, you can delete the `prisma/dev.db` file and run `npx prisma db push` again. It's a good idea to run this every time a change gets made to the `schema.prisma` file.

Next, seed the database with the `prisma/seeds.js` file.

```bash
node --require esbuild-register prisma/seed.ts
```

You can run `npx prisma studio` to access the database in the browser.

Finally:

```
npm run dev
```

You can login with a user that came from the seed:

```
kody
twixrox
```
