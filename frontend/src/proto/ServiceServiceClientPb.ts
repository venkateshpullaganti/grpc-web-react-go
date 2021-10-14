/**
 * @fileoverview gRPC-Web generated client stub for gendocu.sdk_generator.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as src_proto_service_pb from '../../src/proto/service_pb';


export class BookServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_service_pb.ListBookResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    src_proto_service_pb.ListBookResponse.deserializeBinary
  );

  listBooks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_service_pb.ListBookResponse>;

  listBooks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_service_pb.ListBookResponse) => void): grpcWeb.ClientReadableStream<src_proto_service_pb.ListBookResponse>;

  listBooks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_service_pb.ListBookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gendocu.sdk_generator.v3.BookService/ListBooks',
        request,
        metadata || {},
        this.methodInfoListBooks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gendocu.sdk_generator.v3.BookService/ListBooks',
    request,
    metadata || {},
    this.methodInfoListBooks);
  }

  methodInfoDeleteBook = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_service_pb.Book,
    (request: src_proto_service_pb.DeleteBookRequest) => {
      return request.serializeBinary();
    },
    src_proto_service_pb.Book.deserializeBinary
  );

  deleteBook(
    request: src_proto_service_pb.DeleteBookRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_service_pb.Book>;

  deleteBook(
    request: src_proto_service_pb.DeleteBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_service_pb.Book) => void): grpcWeb.ClientReadableStream<src_proto_service_pb.Book>;

  deleteBook(
    request: src_proto_service_pb.DeleteBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_service_pb.Book) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gendocu.sdk_generator.v3.BookService/DeleteBook',
        request,
        metadata || {},
        this.methodInfoDeleteBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gendocu.sdk_generator.v3.BookService/DeleteBook',
    request,
    metadata || {},
    this.methodInfoDeleteBook);
  }

  methodInfoCreateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_service_pb.Book,
    (request: src_proto_service_pb.Book) => {
      return request.serializeBinary();
    },
    src_proto_service_pb.Book.deserializeBinary
  );

  createBook(
    request: src_proto_service_pb.Book,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_service_pb.Book>;

  createBook(
    request: src_proto_service_pb.Book,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_service_pb.Book) => void): grpcWeb.ClientReadableStream<src_proto_service_pb.Book>;

  createBook(
    request: src_proto_service_pb.Book,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_service_pb.Book) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gendocu.sdk_generator.v3.BookService/CreateBook',
        request,
        metadata || {},
        this.methodInfoCreateBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gendocu.sdk_generator.v3.BookService/CreateBook',
    request,
    metadata || {},
    this.methodInfoCreateBook);
  }

}

