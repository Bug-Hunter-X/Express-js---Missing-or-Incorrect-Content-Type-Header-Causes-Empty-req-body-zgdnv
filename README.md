# Express.js - JSON Parsing Issue with Missing Content-Type Header

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not parsed correctly when the `Content-Type` header is missing or incorrect. The server receives an empty `req.body` object, leading to unexpected behavior.

## Problem

The provided `bug.js` file shows a simple Express.js server that expects JSON data. However, if a client sends a POST request without the correct `Content-Type: application/json` header, or with an incorrect header, the server will log an empty `req.body` object.

## Solution

The `bugSolution.js` file demonstrates a fix.  We add a middleware function to explicitly parse JSON requests even if the `Content-Type` header is missing. This ensures that `req.body` is correctly populated regardless of the client's header.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Send a POST request to `http://localhost:3000/data` with JSON data using a tool like Postman or curl, but either omit the `Content-Type` header or set it incorrectly (e.g., `text/plain`). Observe that the server logs an empty `req.body`.
5. Repeat steps 2-4 using `bugSolution.js`. Observe that the server now correctly parses the JSON data.