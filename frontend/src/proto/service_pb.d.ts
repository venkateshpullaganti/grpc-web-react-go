import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class DeleteBookRequest extends jspb.Message {
  getIsbn(): string;
  setIsbn(value: string): DeleteBookRequest;

  getTitle(): string;
  setTitle(value: string): DeleteBookRequest;

  getSelectorCase(): DeleteBookRequest.SelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookRequest): DeleteBookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookRequest;
  static deserializeBinaryFromReader(message: DeleteBookRequest, reader: jspb.BinaryReader): DeleteBookRequest;
}

export namespace DeleteBookRequest {
  export type AsObject = {
    isbn: string,
    title: string,
  }

  export enum SelectorCase { 
    SELECTOR_NOT_SET = 0,
    ISBN = 1,
    TITLE = 2,
  }
}

export class ListBookResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): ListBookResponse;
  clearBooksList(): ListBookResponse;
  addBooks(value?: Book, index?: number): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookResponse): ListBookResponse.AsObject;
  static serializeBinaryToWriter(message: ListBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookResponse;
  static deserializeBinaryFromReader(message: ListBookResponse, reader: jspb.BinaryReader): ListBookResponse;
}

export namespace ListBookResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
  }
}

export class Book extends jspb.Message {
  getIsbn(): string;
  setIsbn(value: string): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getAuthor(): Author | undefined;
  setAuthor(value?: Author): Book;
  hasAuthor(): boolean;
  clearAuthor(): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    isbn: string,
    title: string,
    author?: Author.AsObject,
  }
}

export class Author extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): Author;

  getLastName(): string;
  setLastName(value: string): Author;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Author.AsObject;
  static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
  static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Author;
  static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

