# Lookabook

<Look A Book>

## Description

Look A Book is a full-stack web application that allows users to search for books using the Google Books API, save their favorite ones, and manage their saved books after logging in. In a world full of scattered book recommendations and reading lists, I wanted to create a centralized place for readers to discover and save books they’re interested in. I built Look A Book to deepen my understanding of GraphQL, Apollo Client/Server integration, and user authentication using JSON Web Tokens. This app solves the hassle of keeping track of book discoveries across platforms by allowing authenticated users to store and manage their reading list in one place.
Through this project, I learned how to integrate GraphQL with a MongoDB backend, implement secure user authentication, and replace RESTful calls with Apollo Client queries and mutations.


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

To get the development environment running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Josie3fl/Lookabook.git
   cd look-a-book

2. Install dependencies for both client and server:

    npm install
    cd client
    npm install
    cd ..
3. MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
4. npm run develop

## Usage

Once the application is running:

Visit http://localhost:3000.

Use the search bar to look up books by title, author, or keyword.

Sign up or log in to save books to your account.

Navigate to the Saved Books tab to manage your collection.


## Credits

Made by Josie Borges

Resources Used:

    Google Books API

    Apollo Server Docs

    GraphQL Docs

    JWT Authentication

    MongoDB Atlas


