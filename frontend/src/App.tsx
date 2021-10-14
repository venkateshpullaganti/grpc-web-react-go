import React, { useEffect, useState } from "react";

import { BookServiceClient } from "./proto/ServiceServiceClientPb";
import { Book, Author } from "./proto/service_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { DeleteBookRequest } from "./proto/service_pb";

var service0 = new BookServiceClient(
  "https://m1jh59o8c7.execute-api.ap-south-1.amazonaws.com"
);
function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const listBooks = () => {
    service0.listBooks(new Empty(), {}, (err, resp) => {
      console.log("While get books: got ", err, resp);
      if (err !== null || resp === null) {
        console.error(err || "received empty response");
      } else {
        setBooks(resp.getBooksList());
      }
    });
  };
  useEffect(listBooks, []);
  const addBook = () => {
    const req = new Book();
    req.setTitle(window.prompt("Title") || "");
    req.setIsbn(window.prompt("ISBN") || "");
    const author = new Author();
    author.setFirstName(window.prompt("Author's first name") || "");
    author.setLastName(window.prompt("Author's last name") || "");
    req.setAuthor(author);
    console.log("creating a book", req);
    service0.createBook(req, {}, (err, value) => {
      console.log("error:", err, "value", value);
      listBooks();
    });
  };
  const removeBook = (isbn: string) => {
    const req = new DeleteBookRequest();
    req.setIsbn(isbn);
    service0.deleteBook(req, {}, (err, value) => {
      if (err !== null || value === null) {
        console.error("received error: ", err || "got empty response");
      }
      listBooks();
    });
  };
  return (
    <>
      <ol>
        {books.map((el, key) => (
          <li key={key} onClick={() => removeBook(el.getIsbn())}>
            {el.getTitle()} ({el.getIsbn()})
          </li>
        ))}
      </ol>
      <input type="button" onClick={addBook} value="Add book" />
    </>
  );
}
export default App;
