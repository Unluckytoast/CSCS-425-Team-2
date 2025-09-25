# API Reference - Backend Example

## Base URL
```
http://localhost:3000
```

## Response Format

All API responses follow a standardized JSON format

**Success Response:**
```json
{
  "success": true,
  "data": { /* response data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error description"
}
```

## Endpoints

### Health Check

**GET** `/`

Check if the API is running and view available endpoints.

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Backend Example API is running!",
    "endpoints": [...]
  }
}
```

---

### Messages

#### Create Message

**POST** `/api/messages`

Create a new message.

**Request Body:**
```json
{
  "author": "string (required, max 100 chars)",
  "text": "string (required, max 1000 chars)", 
  "isRead": "boolean (optional, default: false)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "message_id",
    "author": "John Doe",
    "text": "Hello World",
    "isRead": false,
    "timestamp": "2025-09-25T10:30:00.000Z",
    "createdAt": "2025-09-25T10:30:00.000Z",
    "updatedAt": "2025-09-25T10:30:00.000Z"
  }
}
```

#### Get All Messages

**GET** `/api/messages`

Retrieve all messages from the database.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "message_id",
      "author": "John Doe",
      "text": "Hello World",
      "isRead": false,
      "timestamp": "2025-09-25T10:30:00.000Z",
      "createdAt": "2025-09-25T10:30:00.000Z", 
      "updatedAt": "2025-09-25T10:30:00.000Z"
    }
  ]
}
```

#### Get Message by ID

**GET** `/api/messages/:id`

Retrieve a specific message by its ID.

**Parameters:**
- `id` (string) - Message ID

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "message_id",
    "author": "John Doe", 
    "text": "Hello World",
    "isRead": false,
    "timestamp": "2025-09-25T10:30:00.000Z",
    "createdAt": "2025-09-25T10:30:00.000Z",
    "updatedAt": "2025-09-25T10:30:00.000Z"
  }
}
```

#### Update Message

**PUT** `/api/messages/:id`

Update an existing message by its ID.

**Parameters:**
- `id` (string) - Message ID

**Request Body:**
```json
{
  "author": "string (optional, max 100 chars)",
  "text": "string (optional, max 1000 chars)",
  "isRead": "boolean (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "message_id",
    "author": "Updated Author",
    "text": "Updated message text", 
    "isRead": true,
    "timestamp": "2025-09-25T10:30:00.000Z",
    "createdAt": "2025-09-25T10:30:00.000Z",
    "updatedAt": "2025-09-25T10:35:00.000Z"
  }
}
```

#### Delete Message

**DELETE** `/api/messages/:id`

Delete a message by its ID.

**Parameters:**
- `id` (string) - Message ID

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Message deleted successfully",
    "deletedId": "message_id"
  }
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |

## Example Requests

### Using cURL

**Create a message:**
```bash
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "author": "John Doe",
    "text": "Hello, this is a test message!",
    "isRead": false
  }'
```

**Get all messages:**
```bash
curl http://localhost:3000/api/messages
```

**Get message by ID:**
```bash
curl http://localhost:3000/api/messages/MESSAGE_ID_HERE
```

**Update a message:**
```bash
curl -X PUT http://localhost:3000/api/messages/MESSAGE_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Updated message text",
    "isRead": true
  }'
```

**Delete a message:**
```bash
curl -X DELETE http://localhost:3000/api/messages/MESSAGE_ID_HERE
```

## Message Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `author` | String | Yes | Author name (max 100 characters) |
| `text` | String | Yes | Message content (max 1000 characters) |
| `isRead` | Boolean | No | Read status (default: false) |
| `timestamp` | Date | Auto | Message creation time |
| `createdAt` | Date | Auto | Document creation time |
| `updatedAt` | Date | Auto | Document last update time |
| `_id` | ObjectId | Auto | Unique message identifier |



