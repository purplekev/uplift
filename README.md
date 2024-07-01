This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To connect to the backend, please install the following Python dependencies.
```bash
pip install Flask
# and 
pip install -U flask-cors
```
Then, head to the root directory and run ``source venv/bin/activate``.

We need to set-up a pocketbase for the backend and database.

Please install the [pocketbase](https://pocketbase.io/docs/) according to your system's architecture and replace the current file in ``uplift/backend/database``.

To manage the database, please run ``./pocketbase serve``

Finally, run the development server:
```bash
npm run dev
# or
yarn dev
```

And you're all set! Open [http://localhost:3000](http://localhost:3000) with your browser and enjoy the application. 

Please note that our app is best suited with the viewport of 800px × 1200px but in the future, we will implement full responsiveness. 

## More information

For more, in-depth information about this project, please see click [here!](https://devpost.com/software/uplift-bi4quj?ref_content=user-portfolio&ref_feature=in_progress)

