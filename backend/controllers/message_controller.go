package controllers

import (
	"backend/initializers"
	"backend/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func parseMessageID(c *gin.Context) (uint64, error) {
	productID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return 0, err
	}
	return productID, nil
}


func GetMessages(c *gin.Context) {
	var messages []models.Message

	result := initializers.DB.Find(&messages)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to fetch messages"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": messages})
}
func CreateMessage(c *gin.Context) {
    var body struct {
        Name    string `json:"name"`
        Email   string `json:"email"`
        Message string `json:"message"`
    }

    // Bind the JSON data from the request body into the 'body' struct
    if err := c.BindJSON(&body); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "failed to parse request body"})
        return
    }

    // Create the message using the data from the 'body' struct
    message := models.Message{Name: body.Name, Email: body.Email, Message: body.Message}

    // Save the message to the database
    result := initializers.DB.Create(&message)

    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create message"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "message created successfully"})
}

func DeleteMessage(c *gin.Context) {
   messageID, err := parseMessageID(c)
    
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "failed to parse id"})
        return
    }

    var message models.Message

    result := initializers.DB.First(&message, messageID)
    if result.RowsAffected == 0{
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to find message"})
        return
    }

    result = initializers.DB.Delete(&message, messageID)
    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to delete message"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "message deleted successfully"})
}
