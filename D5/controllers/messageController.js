const Message = require('../models/Message');

// Helper function to send standardized responses
const sendResponse = (res, statusCode, success, data = null, error = null) => {
  const response = { success };
  
  if (success && data !== null) {
    response.data = data;
  }
  
  if (!success && error) {
    response.error = error;
  }
  
  return res.status(statusCode).json(response);
};

// POST /api/messages → Create a new message
const createMessage = async (req, res) => {
  try {
    // For now, return placeholder response
    // TODO: Implement database logic
    
    const sampleMessage = {
      id: "placeholder-id-123",
      author: req.body.author || "Sarah",
      text: req.body.text || "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
      timestamp: new Date().toISOString(),
      isRead: false
    };

    sendResponse(res, 201, true, {
      message: "Message created successfully",
      messageData: sampleMessage
    });
  } catch (error) {
    sendResponse(res, 500, false, null, "Failed to create message");
  }
};

// GET /api/messages → Get all messages
const getAllMessages = async (req, res) => {
  try {
    // For now, return placeholder response
    // TODO: Implement database logic
    
    const sampleMessages = [
      {
        id: "msg-001",
        author: "Sarah",
        text: "Rent is due this Friday! Please Venmo me your portion ($650) by Thursday night.",
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        isRead: false
      },
      {
        id: "msg-002",
        author: "Mike",
        text: "Kitchen deep clean completed! ✅ Dishwasher is running, please unload when done.",
        timestamp: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
        isRead: true
      },
      {
        id: "msg-003",
        author: "Alex",
        text: "Weekly grocery run tomorrow at 2pm - need toilet paper, milk, and cleaning supplies. Split 4 ways = $15 each",
        timestamp: new Date().toISOString(),
        isRead: false
      }
    ];

    sendResponse(res, 200, true, {
      messages: sampleMessages,
      count: sampleMessages.length
    });
  } catch (error) {
    sendResponse(res, 500, false, null, "Failed to retrieve messages");
  }
};

// GET /api/messages/:id → Get a specific message by ID
const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // For now, return placeholder response
    // TODO: Implement database logic
    
    if (!id) {
      return sendResponse(res, 400, false, null, "Message ID is required");
    }

    const sampleMessage = {
      id: id,
      author: "Emma",
      text: `Utilities bill for this month is $180. Everyone owes $45. Please pay by the 15th!`,
      timestamp: new Date().toISOString(),
      isRead: false
    };

    sendResponse(res, 200, true, {
      message: sampleMessage
    });
  } catch (error) {
    sendResponse(res, 500, false, null, "Failed to retrieve message");
  }
};

// PUT /api/messages/:id → Update a message by ID
const updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // For now, return placeholder response
    // TODO: Implement database logic
    
    if (!id) {
      return sendResponse(res, 400, false, null, "Message ID is required");
    }

    const updatedMessage = {
      id: id,
      author: updateData.author || "Updated Author",
      text: updateData.text || "Chore list updated - bathroom cleaning completed by Jake! Next up: vacuum living room.",
      timestamp: new Date().toISOString(),
      isRead: updateData.isRead !== undefined ? updateData.isRead : false
    };

    sendResponse(res, 200, true, {
      message: "Message updated successfully",
      messageData: updatedMessage
    });
  } catch (error) {
    sendResponse(res, 500, false, null, "Failed to update message");
  }
};

// DELETE /api/messages/:id → Delete a message by ID
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    
    // For now, return placeholder response
    // TODO: Implement database logic
    
    if (!id) {
      return sendResponse(res, 400, false, null, "Message ID is required");
    }

    sendResponse(res, 200, true, {
      message: `Message with ID ${id} deleted successfully`,
      deletedId: id
    });
  } catch (error) {
    sendResponse(res, 500, false, null, "Failed to delete message");
  }
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage
};