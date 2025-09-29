# API Reference - Backend Example

A RESTful API for managing messages with MongoDB integration.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start MongoDB**
   ```bash
   brew services start mongodb-community@6.0
   ```

3. **Configure Environment**
   Create `.env` file:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/backend-example
   ```

4. **Start Server**
   ```bash
   npm run dev
   ```

## Base URL
```
http://localhost:3000
```

## Message Model

```json
{
  "_id": "ObjectId (auto-generated)",
  "author": "string (required, max 100 chars)",
  "text": "string (required, max 1000 chars)",  
  "timestamp": "Date (auto-generated)",
  "isRead": "boolean (default: false)"
}
```

## API Endpoints

### Create Message
```
POST /api/messages
Content-Type: application/json

{
  "author": "John Doe",
  "text": "Hello world!",
  "isRead": false
}
```

### Get All Messages
```
GET /api/messages
```

### Get Message by ID
```
GET /api/messages/{id}
```

### Update Message
```
PUT /api/messages/{id}
Content-Type: application/json

{
  "author": "Jane Doe",
  "text": "Updated message",
  "isRead": true
}
```

### Delete Message
```
DELETE /api/messages/{id}
```

## Response Format

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message"
}
```

## Testing with Postman

1. Import collection: `tests/Backend_Example_API.postman_collection.json`
2. Ensure server is running on `http://localhost:3000`
3. Test all endpoints with sample data
