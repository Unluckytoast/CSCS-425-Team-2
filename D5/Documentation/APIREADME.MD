# Roommate Management API Reference

A RESTful API for managing roommate communications, announcements, and task coordination.

**Base URL:** `http://localhost:3000`

## Response Format

All API responses follow a standardized JSON format:

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data here
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Descriptive error message"
}
```

## Authentication
Currently no authentication required (development phase).

---

## Endpoints

### 1. Health Check

**GET** `/`

Check if the API is running and view available endpoints.

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Roommate Management API is running!",
    "endpoints": [
      "POST /api/messages - Create a new roommate message/announcement",
      "GET /api/messages - Get all roommate messages",
      "GET /api/messages/:id - Get a specific message by ID",
      "PUT /api/messages/:id - Update a message by ID",
      "DELETE /api/messages/:id - Delete a message by ID"
    ]
  }
}
```

---

### 2. Create Message

**POST** `/api/messages`

Create a new roommate message or announcement.

**Headers:**
- `Content-Type: application/json`

**Request Body:**
```json
{
  "author": "string (required, max 100 chars)",
  "text": "string (required, max 1000 chars)",
  "isRead": "boolean (optional, default: false)"
}
```

**Example Request:**
```json
{
  "author": "Sarah",
  "text": "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
  "isRead": false
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "message": "Message created successfully",
    "messageData": {
      "id": "placeholder-id-123",
      "author": "Sarah",
      "text": "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
      "timestamp": "2025-09-28T10:30:00.000Z",
      "isRead": false
    }
  }
}
```

---

### 3. Get All Messages

**GET** `/api/messages`

Retrieve all roommate messages.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "msg-001",
        "author": "Sarah",
        "text": "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
        "timestamp": "2025-09-27T10:30:00.000Z",
        "isRead": false
      },
      {
        "id": "msg-002",
        "author": "Mike",
        "text": "Kitchen deep clean completed! ✅ Dishwasher is running, please unload when done.",
        "timestamp": "2025-09-27T22:30:00.000Z",
        "isRead": true
      },
      {
        "id": "msg-003",
        "author": "Alex",
        "text": "Weekly grocery run tomorrow at 2pm - need toilet paper, milk, and cleaning supplies. Split 4 ways = $15 each",
        "timestamp": "2025-09-28T10:30:00.000Z",
        "isRead": false
      }
    ],
    "count": 3
  }
}
```

---

### 4. Get Message by ID

**GET** `/api/messages/:id`

Retrieve a specific message by its ID.

**Parameters:**
- `id` (string, required) - The message ID

**Example:** `GET /api/messages/msg-001`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": {
      "id": "msg-001",
      "author": "Emma",
      "text": "Utilities bill for this month is $180. Everyone owes $45. Please pay by the 15th!",
      "timestamp": "2025-09-28T10:30:00.000Z",
      "isRead": false
    }
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Message ID is required"
}
```

---

### 5. Update Message

**PUT** `/api/messages/:id`

Update an existing message by its ID.

**Parameters:**
- `id` (string, required) - The message ID

**Headers:**
- `Content-Type: application/json`

**Request Body:**
```json
{
  "author": "string (optional)",
  "text": "string (optional)",
  "isRead": "boolean (optional)"
}
```

**Example Request:**
```json
{
  "author": "Mike",
  "text": "Kitchen deep clean completed! ✅ Dishwasher is running, please unload when done.",
  "isRead": true
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": "Message updated successfully",
    "messageData": {
      "id": "msg-001",
      "author": "Mike",
      "text": "Kitchen deep clean completed! ✅ Dishwasher is running, please unload when done.",
      "timestamp": "2025-09-28T10:30:00.000Z",
      "isRead": true
    }
  }
}
```

---

### 6. Delete Message

**DELETE** `/api/messages/:id`

Delete a message by its ID.

**Parameters:**
- `id` (string, required) - The message ID

**Example:** `DELETE /api/messages/msg-001`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": "Message with ID msg-001 deleted successfully",
    "deletedId": "msg-001"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Message ID is required"
}
```

---

## Status Codes

| Code | Description |
|------|-------------|
| 200  | OK - Request successful |
| 201  | Created - Resource created successfully |
| 400  | Bad Request - Invalid request data |
| 404  | Not Found - Route not found |
| 500  | Internal Server Error - Server error |

---

## Common Use Cases

### 💰 Financial Reminders
```json
{
  "author": "Sarah",
  "text": "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
  "isRead": false
}
```

### 🧹 Chore Updates
```json
{
  "author": "Mike",
  "text": "Kitchen deep clean completed! ✅ Next: bathroom needs attention.",
  "isRead": false
}
```

### 🛒 Grocery Coordination
```json
{
  "author": "Alex",
  "text": "Target run this weekend - add items to the shared list. Split cost 4 ways.",
  "isRead": false
}
```

### ⚡ Utility Bills
```json
{
  "author": "Emma",
  "text": "Electric bill: $120 this month. Everyone owes $30. Due by the 15th!",
  "isRead": false
}
```

---

## Testing

Import the Postman collection from `/tests/Backend_Example_API.postman_collection.json` or use the Thunder Client collection in VS Code.

**Quick Test Commands:**
```bash
# Health check
curl http://localhost:3000/

# Get all messages
curl http://localhost:3000/api/messages

# Create a message
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"author":"Test","text":"Test message","isRead":false}'
```

---

*Last updated: September 28, 2025*