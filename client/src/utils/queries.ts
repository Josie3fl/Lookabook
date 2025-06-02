
import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
export const GET_BOOKS = gql`
  query getBooks {
    books {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($bookId: String!) {
    book(bookId: $bookId) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

export const GET_BOOKS_BY_AUTHOR = gql`
  query getBooksByAuthor($author: String!) {
    booksByAuthor(author: $author) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_TITLE = gql`
  query getBooksByTitle($title: String!) {
    booksByTitle(title: $title) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_GENRE = gql`
  query getBooksByGenre($genre: String!) {
    booksByGenre(genre: $genre) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_PUBLISHER = gql`
  query getBooksByPublisher($publisher: String!) {
    booksByPublisher(publisher: $publisher) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_YEAR = gql`
  query getBooksByYear($year: Int!) {
    booksByYear(year: $year) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_ISBN = gql`
  query getBooksByISBN($isbn: String!) {
    booksByISBN(isbn: $isbn) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_LANGUAGE = gql`
  query getBooksByLanguage($language: String!) {
    booksByLanguage(language: $language) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_FORMAT = gql`
  query getBooksByFormat($format: String!) {
    booksByFormat(format: $format) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_RATING = gql`
  query getBooksByRating($rating: Float!) {
    booksByRating(rating: $rating) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

export const GET_BOOKS_BY_PAGE_COUNT = gql`
  query getBooksByPageCount($pageCount: Int!) {
    booksByPageCount(pageCount: $pageCount) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;
