package api

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func Routes(r *gin.Engine) {
	r.GET("/messages", controllers.GetMessages)
	r.POST("/messages", controllers.CreateMessage)
    r.DELETE("/messages/:id", controllers.DeleteMessage)
}
