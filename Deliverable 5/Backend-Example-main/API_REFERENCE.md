# API Reference (Message Board)

This file documents the API endpoints and how to run the service.

Base URL: http://localhost:3000

Environment

- Create a `.env` file in the project root. Use `.env.example` as a template.
- Required variables:
  - PORT - port to run the server on (default 3000)
  - MONGODB_URI - MongoDB connection string (local or Atlas)

Endpoints

- POST /api/messages
  - Create a new message
  - Body (application/json): { "author": "string", "text": "string", "isRead": boolean }
  - Success: 201, { success: true, data: { message: 'Message created successfully', messageData: {...} } }

- GET /api/messages
  - List messages
  - Query params: limit (default 50, max 100), skip (default 0), sort (default -createdAt)
  - Success: 200, { success: true, data: { messages: [...], count: <number> } }

- GET /api/messages/:id
  - Get a single message by MongoDB ObjectId
  - Success: 200, { success: true, data: { message: {...} } }
  - Errors: 400 invalid id, 404 not found

- PUT /api/messages/:id
  - Update message fields (author, text, isRead)
  - Body (application/json): any of the message fields
  - Success: 200, { success: true, data: { message: 'Message updated successfully', messageData: {...} } }

- DELETE /api/messages/:id
  - Delete a message
  - Success: 200, { success: true, data: { message: 'Message with ID <id> deleted successfully', deletedId: <id> } }

How to run

1. Install dependencies:

```powershell
npm install
```

2. Copy `.env.example` -> `.env` and set `MONGODB_URI`.

3. Start server (dev):

```powershell
npm run dev
```

Testing

Import `tests/Backend_Example_API.postman_collection.json` into Postman or use Thunder Client in VS Code. The collection includes example requests for the endpoints above.
