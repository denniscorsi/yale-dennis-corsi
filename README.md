### Run Instructions

1. In the root directory, create a .env file and paste into it the line I provided in the comment section of the submission form.
1. Install dependencies by executing `npm install`
1. Start the application by executing `npm run dev`
1. In your browser, navigate to the URL shown in the terminal. It will likely be http://localhost:5173/

### Next Steps

I kept myself within a self-imposed time limit on this take-home assignment. There is a lot more I want to do to polish this app! I've listed some of those next steps below. If there is anything in particular you would like me to show you to move me forward, I'd be happy to do so. Just let me know, and I'll gladly set aside some more time.

##### Deployment

- Containerize the application with Docker. I would update the package.json and other configurations so that the backend and frontend could be containerized separately.
- Deploy the application via AWS. The backend can run on an EC2 server, and the frontend could be hosted in an S3 bucket.
- Move the database to AWS. The Postgres database is currently hosted on elephantSQL, a free and straightforward option. I would move the database to AWS RDS to manage everything in one place.
- Fetch request URLs would need to be altered to the server's address in the EC2 instance.
- Fetching the long list of results from PubMed API could be offloaded to a serverless lambda function, lightening the load on the main EC2 server.

##### User Interface

- Allow the user to submit the search using the enter key.
- Enhance accessibility with ARIA labels.
- Retrieve the names of each article and display those names instead of just the IDs.

##### Performance

- Implement caching to hold the results of common search queries.
- The PubMed API only allows a max of 100,000 pmids returned. I need to determine how to retrieve all of them if required for our application use cases.
